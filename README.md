# 巴哈姆特自動化模板

請 Fork 或是 Generate 來使用。

[使用方法在此](https://github.com/marketplace/actions/bahamut-automation#使用方法)

[核心程式](https://github.com/JacobLinCool/Bahamut-Automation)

## 初始設定

你可以透過修改 `.github/workflows` 資料夾內的檔案來修改設定。

但如果你沒有改，那程式就會依照初始設定走：

1. 程式會在台灣時間凌晨 1 ~ 2 點之間以及中午 1 ~ 2 點之間各自動排程執行一次。
2. 你也可以於 `Actions` 頁面主動執行。

## 更新方法

`.github/workflows` 資料夾內的 `automation.yml`：

```yaml
# 使用 vA.B.C 版本
uses: JacobLinCool/Bahamut-Automation@vA.B.C

# 使用 v0.6.7 版本
uses: JacobLinCool/Bahamut-Automation@v0.6.7

# 使用 最新版本（自動更新）
uses: JacobLinCool/Bahamut-Automation@action
```

> `automation_v1.yml` 是 v1 （還在測試中）

## 遇到問題？

[來 Discussions 這裡找找](https://github.com/JacobLinCool/Bahamut-Automation/discussions)

## 聲明

我不能保證程式一定會如期執行，也不能保證程式會成功執行，有時 GitHub 會自己吃掉。

自 v0.6.7 版本開始，使用 [countapi.xyz](https://countapi.xyz/) 計數器匿名累積使用次數，方便估算成效，如有疑慮請不要使用本程式。

本程式仰賴部分 NPM 外部程式庫，如果發生安全問題，由使用者自行承擔，如有疑慮請不要使用本程式。

如果你執行這個程式，代表你必須自負所有風險，如有疑慮請不要使用本程式。

如果你發現什麼 Bug 之類的東西（尤其是安全問題），或是有新的想法，歡迎[到 Action 的 Discussion 提出](https://github.com/JacobLinCool/Bahamut-Automation/discussions)。
