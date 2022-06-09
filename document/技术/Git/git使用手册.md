# git 使用手册
> 为什么Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件
## git 工作流程
![git工作流程图](src\git_flow.png)
### workspace 工作空间
1. 本地的、正在修改的内容，通常这里的文件状态是最新的
2. 任何对象都是在工作空间中诞生和被修改
#### 状态变化
1. 通过 `git add` 命令将新增、修改的文件添加到<font color=red>暂存区</font>
2. 通过 `git commit -a` 命令将文件状态直接更新到<font color=red>本地仓库</font>
3. 通过 `git pull` 命令从<font color=red>远程仓库</font>拉取远程仓库的<font color=orange>最后版本</font>
4. 通过 `git checkout` 命令从<font color=red>暂存区</font>拉取检出文件（覆盖本地）
5. 通过 `git checkout <HEAD> | <commit id>` 命令从<font color=red>本地仓库</font>的最新几次提交或指定的某次提交中检出文件（覆盖本地）

### index 暂存区
1. 标记了当前的工作空间中哪些内容是被 `git` 管理的
2. 任何修改都是从进入index区才开始被 `git` 版本控制
#### 状态变化
1. 通过 `git commit` 命令将本次修改版本提交到<font color=red>本地仓库</font>

### 本地仓库
1. 保存提交过的各个版本
2. 只有把修改提交到本地仓库，该修改才能在仓库中留下痕迹
#### 状态变化
1. 通过 `git push` 命令将本次修改版本推送到<font color=red>远程仓库</font>
2. 通过 `git fetch` 命令从<font color=red>远程仓库</font>强制拉取代码覆盖本地

### 远程仓库
1. 是本地仓库的异地备份，可以被其他协作者共享，这里的文件状态最旧
2. 要与协作者分享本地的修改，可以把它们 `push` 到远程仓库来共享

## git 命令

### 配置
#### 配置用户名和邮箱
1. `git config --global user.name "username"`
2. `git config --global user.email useremail@qq.com`

#### 查看用户名和邮箱
1. `git config --global user.name`
2. `git config --global user.email`

#### `git config --list` 查看其他配置信息

### 文件管理
#### `git add` 将本地修改添加到暂存区

把文件修改添加到暂存区，使用此命令后，未调用 `git commit` 之前可以用 `git reset HEAD` 回退到当期版本来清空暂存区

#### `git commit` 提交更改

把暂存区的所有内容提交到当前分支，使用此命令后即生成一个新的版本号
#### `git status` 查看本地仓库的当前状态

#### `git stash` 
> 保存当前工作区的修改
##### 参数
1. `git stash save "message"` 执行存储时，添加备注，方便查找，只有 `git stash` 也要可以的，但查找时不方便识别
2. `git stash list` 查看 `stash` 了哪些存储
3. `git stash show` 显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加 `stash@{$num}`，比如第二个 `git stash show stash@{1}`
4. `git stash show -p` 显示第一个存储的改动，如果想显示其他存存储，命令：`git stash show  stash@{$num}  -p` ，比如第二个：`git stash show  stash@{1}  -p`

5. `git stash apply` 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即 `stash@{0}`，如果要使用其他个，`git stash apply stash@{$num}` ， 比如第二个：`git stash apply stash@{1}`

6. `git stash pop` 命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个 `stash`,即 `stash@{0}`，如果要应用并删除其他 `stash`，命令：`git stash pop stash@{$num}` ，比如应用并删除第二个：`git stash pop stash@{1}`

7. `git stash drop stash@{$num}` 丢弃 `stash@{$num}` 存储，从列表中删除这个存储

8. `git stash clear` 删除所有缓存的 `stash`

##### 注意 
1. 没有在 `git` 版本控制中的文件，是不能被 `git stash` 存起来的，新添加的文件无法被保存

2. 只能保存工作区内的修改，对 `git add` 命令添加到暂存区的文件无效


#### `git diff` 查看本地仓库具体修改内容

#### `git log` 显示提交日志

`commit id` 是对应提交的版本号，`Git` 是分布式版本控制系统，用类似 `svn` 的数字版本号会引发冲突

`HEAD` 表示当前版本

#### `git reset --hard HEAD^` 回退版本

`HEAD` 为回退到当前版本（清空暂存区），`HEAD^` 指回退到上一个版本，`HEAD^^` 代表回退两个版本，回退100个版本可写为 `HEAD~100`，`HEAD` 可替换为目标版本的 `commit id`

##### 参数
`--hard` 有了参数--hard,直接把工作区的内容也修改了，不加--hard的时候只是操作了暂存区（慎用）

#### `git reflog` 查看命令日志

#### `git checkout --`
丢弃工作区的修改，让这个文件回到最近一次git commit或git add时的状态。注意：没有 `--`，就变成了“切换到另一个分支”的命令

#### `git rm` 删除版本库中的文件

### 分支操作

查看当前分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`或者`git switch <name>`

创建+切换分支：`git checkout -b <name>` 或者 `git switch -c <name>`

合并某分支到当前分支：`git merge <name>`

删除分支：`git branch -d <name>`
#### 合并分支
1. `git merge <name>` 合并指定分支到当前分支，最终会生成一个新的 `commit`，在历史中展示为二叉树节点
2. `git rebase` 变基，最终效果与 `merge` 类似，区别在于不会生成新的 `commit` ，`git rebase` 提取操作有点像`git cherry-pick` ，执行 `rebase` 后依次将当前的提交 `cherry-pick` 到目标分支上，然后将在原始分支上的已提交的 `commit` 删除，在历史中展示为一条直线

##### mearge 和 rebase
1. `merge` 能够体现出时间线，但是 `rebase` 会打乱时间线
2. `rebase` 看起来简洁，`merge` 看起来较乱
3. 最终结果是都把代码合起来了

##### 注意
1. 本地新建的分支如果不推送到远程，对其他人就是不可见的

#### `get cherry-pick <commit>`
> 复制一个指定的提交到当前分支

## 自定义 git
### `.gitignore` 文件
部分规则如下
```
# 排除所有.开头的隐藏文件:
.*
# 排除所有.class文件:
*.class

# 不排除.gitignore和App.class:
!.gitignore
!App.class
```