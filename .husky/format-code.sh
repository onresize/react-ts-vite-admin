# 格式化暂存区代码

#!/bin/bash
red=$(tput setaf 1)
green=$(tput setaf 2)
reset=$(tput sgr0)

echo "》》》${green}开始按统一配置格式化暂存区代码...${reset}"

if ! yarn tsc && yarn lint-staged; then
    echo "《《《${red}格式化出错，请根据错误内容修改后再次尝试！${reset}"
    exit 1;
fi

echo "《《《${green}恭喜你，格式完成！${reset}"
exit
