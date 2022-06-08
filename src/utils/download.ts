import { ElMessage } from "element-plus";

// 下载文件
export const downloadFile = (
  url: string,
  filename?: string,
  suffix?: string
) => {
  fetch(url).then((res) => {
    res.blob().then((blob) => {
      const link = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = link;
      a.download = filename ? filename + suffix : "download" + suffix;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(link);
      ElMessage({
        type: "success",
        message: "下载成功",
      });
    });
  });
};
