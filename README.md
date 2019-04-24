## git test

### 本地关联github仓库

```
git init
git add .
git commit -m 'first commit'
git add remote origin git@github.com:do-do-it/git-test.git
git push -u origin master
```

### 回退：目标版本之后的版本直接删除

```
git log 显示提交的版本号
git reset --hard 目标版本号
git push -f 强推
```

## 根据操作记录回退

```
git reflog 显示之前的操作记录
git reset --hard 目标版本号
```

## 反做

```
git revert 目标版本号
```

## 撤销

```
git reset head . 取消所有文件的add
```