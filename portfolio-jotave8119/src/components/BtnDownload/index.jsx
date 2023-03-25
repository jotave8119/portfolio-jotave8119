import "./style.css";

const BtnDownload = () => {
  const onButtonClick = () => {
    fetch("cvjoao.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileUrl  = window.URL.createObjectURL(blob);
        let aLink      = document.createElement("a");
        aLink.href     = fileUrl;
        aLink.download = "cvjoao.pdf";
        aLink.click();
      });
    });
  };

  return (
    <div data-tooltip="Size: 336 KB" class="button" onClick={onButtonClick}>
      <div class="button-wrapper">
        <div class="text">Download</div>
        <span class="icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            height="2em"
            width="2em"
            role="img"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default BtnDownload;
