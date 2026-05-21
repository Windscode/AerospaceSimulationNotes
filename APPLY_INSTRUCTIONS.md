# Apply Instructions

1. 克隆你的仓库：

```powershell
git clone https://github.com/Windscode/AerospaceSimulationNotes.git
cd AerospaceSimulationNotes
```

2. 保留 `.git`，删除其他旧文件。

```powershell
Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
```

3. 将本压缩包内所有文件复制到仓库根目录。确保根目录直接可见：

```text
package.json
docusaurus.config.js
src/
docs/
blog/
static/
.github/
```

4. 本地构建验证：

```powershell
npm install
npm run build
```

5. 提交：

```powershell
git add -A
git commit -m "Redesign website as enterprise aerospace simulation intelligence hub"
git push
```
