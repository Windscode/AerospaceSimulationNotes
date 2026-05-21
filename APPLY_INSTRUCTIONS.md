# 应用说明

1. 克隆仓库：

```powershell
git clone https://github.com/Windscode/AerospaceSimulationNotes.git
cd AerospaceSimulationNotes
```

2. 保留 `.git`，删除其他旧文件：

```powershell
Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
```

3. 把本包内容复制到仓库根目录。

4. 构建验证：

```powershell
npm install
npm run build
```

5. 提交：

```powershell
git add -A
git commit -m "Redesign website as Chinese aerospace simulation intelligence hub"
git push
```
