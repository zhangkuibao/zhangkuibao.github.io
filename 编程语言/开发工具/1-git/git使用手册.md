> 为什么Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件
## 命令

##### 将本地修改添加到暂存区
`git add` 
把文件修改添加到暂存区，使用此命令后，未调用 `git commit` 之前可以用 `git reset HEAD` 回退到当期版本来清空暂存区

##### 提交更改
`git commit`
把暂存区的所有内容提交到当前分支，使用此命令后即生成一个新的版本号
##### 查看本地仓库的当前状态

`git status`

##### 查看本地仓库具体修改内容

`git diff`

##### 显示提交日志

`git log`

`commit id` 是对应提交的版本号，`Git` 是分布式版本控制系统，用类似 `svn` 的数字版本号会引发冲突

`HEAD` 表示当前版本

##### 回退版本

`git reset --hard HEAD^`

`HEAD` 为回退到当前版本（清空暂存区），`HEAD^` 指回退到上一个版本，`HEAD^^` 代表回退两个版本，回退100个版本可写为 `HEAD~100`，`HEAD` 可替换为目标版本的 `commit id`

###### 参数
`--hard` 有了参数--hard,直接把工作区的内容也修改了，不加--hard的时候只是操作了暂存区（慎用）

##### 查看命令日志

`git reflog`

##### `git checkout --`
丢弃工作区的修改，让这个文件回到最近一次git commit或git add时的状态。注意：没有 `--`，就变成了“切换到另一个分支”的命令

##### `git rm`
删除版本库中的文件

#### 分支操作
查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`或者`git switch <name>`

创建+切换分支：`git checkout -b <name>` 或者 `git switch -c <name>`

合并某分支到当前分支：`git merge <name>`

删除分支：`git branch -d <name>`