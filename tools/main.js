const SheetApiClientFactory = require("./sheet_api_client_factory");
const SheetDownloader = require("./sheet_downloader");

async function main() {
  try {
    const sheetApiClient = await SheetApiClientFactory.create();
    const downloader = new SheetDownloader(sheetApiClient);
    const spreadsheetId = "1z2d4gB08JSI8SEotnHDKdcq8EQ9X405fWPxeUCAqW1c";
    const notice = await downloader.downloadToJson(
      spreadsheetId,
      "notice",
      "downloaded/notice.json"
    );

    console.log(notice);

    const countryInfo = await downloader.downloadToJson(
      spreadsheetId,
      "countryInfo",
      "downloaded/countryInfo.json"
    );

    console.log(countryInfo);
  } catch (e) {
    console.error(e);
  }
}

main();
