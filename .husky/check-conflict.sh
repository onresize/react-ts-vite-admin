# 检查commit代码是否有冲突

#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

echo "》》》${green}开始检查暂存区代码是否存在未解决冲突的代码...${reset}"

for FILE in $(git diff --name-only --cached --)
do
    # 过滤掉 check-conflict.sh 文件
    if [ "$FILE" = ".husky/check-conflict.sh" ]; then
        continue
    fi
    # 匹配 <<<<<<< HEAD
    if grep "<<<<<<< HEAD" "$FILE";
    then
        echo "《《《${red}$FILE 存在 未解决冲突的代码，请解决以上所在行的冲突后再提交！${reset}"
        exit 1
    fi
done

echo "《《《${green}恭喜你，检测通过！${reset}"
exit
