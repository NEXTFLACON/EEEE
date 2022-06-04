// 這個檔案是用來合併 config 跟 secret 的
// 這是 JavaScript，一個非常非常好用的語言

const fs = require("node:fs");

const { config, secrets } = process.env;
const parsed_secrets = JSON.parse(secrets);

let merged = fs.readFileSync(config, "utf8");
for (const key in parsed_secrets) {
    const regex = new RegExp("\\$" + key, "g");
    console.log(`Replacing ${merged.match(regex)?.length ?? 0} ${regex}`);
    merged = merged.replace(regex, parsed_secrets[key]);
}
fs.writeFileSync("merged-config.yml", merged);
