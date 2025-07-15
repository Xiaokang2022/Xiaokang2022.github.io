// options for Thebe

const _thebe_options = {
    useBinder: true,
    requestKernel: true,
    binderOptions: {
        repo: "Xiaokang2022/Xiaokang2022.github.io",
        ref: "main"
    },
    mountActivateWidget: false,
    mountStatusWidget: false,
    mountRunButton: true,
    mountRunAllButton: false,
    mountRestartButton: false,
    mountRestartAllButton: false,
    kernelOptions: {
        kernelName: "python3",
    },
    codeMirrorConfig: {
        theme: "darcula"
    }
}

function activate() {
    thebe.mountStatusWidget();
    thebe.bootstrap(_thebe_options);
}

function run() {
    document.getElementsByClassName("thebe-run-button")[0].click();
}
