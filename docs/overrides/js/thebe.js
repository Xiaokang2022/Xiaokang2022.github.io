// options for Thebe

const thebe_options = {
    useBinder: true,
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
    requestKernel: true,
    kernelOptions: {
        kernelName: "python3",
    },
    codeMirrorConfig: {
        theme: "darcula"
    }
}