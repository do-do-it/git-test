## git test

### 本地关联github仓库

```
git init
git add .
git commit -m 'first commit'
git add remote origin git@github.com:do-do-it/git-test.git
git push -u origin master
```

### 回退：目标版本之后的版本

```
git log 显示提交的版本号
git reset --hard 目标版本号
```
