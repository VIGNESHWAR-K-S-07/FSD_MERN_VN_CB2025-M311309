function downloadFile(filename, callback) {
  setTimeout(() => {
    console.log("Downloading " + filename + " ...");
    callback();
  }, 2000);
}
downloadFile("file.txt", () => console.log("Download complete!"));
