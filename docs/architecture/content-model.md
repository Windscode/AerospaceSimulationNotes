# Content Model

本网站采用数据驱动内容模型。核心数据在 `src/data/siteContent.js`。

## Tool Entry

```js
{
  id: 'matlab-simulink',
  name: 'MATLAB / Simulink',
  vendor: 'MathWorks',
  category: 'GNC & System Modeling',
  type: 'Commercial',
  maturity: 'Industry Standard',
  priority: 1,
  domains: ['GNC', 'Flight Dynamics', 'Controls'],
  interface: 'MATLAB, Simulink, Stateflow',
  status: 'Core reference',
  description: '...',
  link: '/docs/tools/matlab-simulink'
}
```

## Project Entry

```js
{
  id: 'orekit',
  name: 'Orekit',
  domain: 'Orbit',
  language: 'Java',
  license: 'Apache-2.0',
  maturity: 'Engineering Reference',
  status: 'Evaluating',
  rating: 'A',
  reproduction: 'Planned',
  description: '...',
  link: 'https://www.orekit.org/'
}
```

## Governance

新增条目时必须至少填写：来源、类别、成熟度、工程价值、状态、下一步动作。没有判断的链接不要直接进入稳定知识库。
