import React, {useEffect, useMemo, useState} from 'react';
import { labImages } from '../data/aerolabContent';

const topics = [
  { key: 'iss', label: '空间站', query: 'International Space Station Earth orbit' },
  { key: 'rocket', label: '发射任务', query: 'rocket launch spacecraft NASA' },
  { key: 'orion', label: '深空飞船', query: 'Orion spacecraft Artemis NASA' },
  { key: 'earth', label: '地球观测', query: 'Earth from space NASA satellite' },
];

const fallbackImages = [
  { title: '轨道动力学', href: labImages.orbit, center: 'AeroSim', description: '轨道传播、覆盖分析与任务回放的研究主视觉。' },
  { title: '任务控制', href: labImages.control, center: 'AeroSim', description: '遥测、事件、状态量和实验结论的控制台视觉。' },
  { title: '公开数据', href: labImages.data, center: 'AeroSim', description: '公开数据、参数推断和证据链整理视觉。' },
  { title: '空间环境', href: labImages.space, center: 'AeroSim', description: '航天器、地球背景和深空任务视觉。' },
];

function normalizeItems(collection = []) {
  return collection
    .map(item => {
      const link = item.links?.find(linkItem => linkItem.render === 'image') || item.links?.[0];
      const data = item.data?.[0] || {};
      if (!link?.href || !data.title) return null;
      return {
        title: data.title,
        description: data.description || data.secondary_creator || 'NASA Image and Video Library',
        center: data.center || 'NASA',
        href: link.href,
        nasaId: data.nasa_id,
      };
    })
    .filter(Boolean)
    .slice(0, 6);
}

export default function NasaVisualWall() {
  const [active, setActive] = useState(topics[0].key);
  const [items, setItems] = useState([]);
  const [state, setState] = useState('idle');
  const activeTopic = useMemo(() => topics.find(topic => topic.key === active) || topics[0], [active]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setState('loading');
      try {
        const url = `https://images-api.nasa.gov/search?media_type=image&q=${encodeURIComponent(activeTopic.query)}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`NASA image request failed: ${response.status}`);
        const json = await response.json();
        const normalized = normalizeItems(json.collection?.items || []);
        if (!cancelled) {
          setItems(normalized.length ? normalized : fallbackImages);
          setState(normalized.length ? 'ready' : 'fallback');
        }
      } catch (error) {
        if (!cancelled) {
          setItems(fallbackImages);
          setState('fallback');
        }
      }
    }
    load();
    return () => { cancelled = true; };
  }, [activeTopic]);

  const displayed = items.length ? items : fallbackImages;

  return <section className="lab-section lab-nasa-visual-wall">
    <div className="lab-section-index">VIS</div>
    <div className="lab-section-head">
      <span>真实影像流</span>
      <h2>用公开航天影像提升页面真实感。</h2>
      <p>网站不能只靠发光框和抽象图形。这里从航天影像库动态拉取真实任务图片，作为后续补充对象档案、任务案例和视觉资产的入口。</p>
    </div>
    <div className="lab-nasa-tabs">{topics.map(topic => <button key={topic.key} type="button" className={topic.key === active ? 'active' : ''} onClick={() => setActive(topic.key)}>{topic.label}</button>)}</div>
    <div className="lab-nasa-status"><span>{state === 'loading' ? '正在加载影像库...' : state === 'fallback' ? '影像接口不可用，显示本地备用图。' : '影像已加载，可作为后续视觉资产候选。'}</span><strong>{activeTopic.query}</strong></div>
    <div className="lab-nasa-grid">{displayed.map((item, index) => <article key={`${item.title}-${index}`}>
      <img src={item.href} alt={item.title} loading="lazy" />
      <div><span>{item.center}</span><h3>{item.title}</h3><p>{item.description}</p></div>
    </article>)}</div>
  </section>;
}
