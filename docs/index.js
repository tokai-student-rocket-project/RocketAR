window.onload = () => {
    const el = document.querySelector("[gps-new-camera]");

    console.log("loaded");

    el.addEventListener("camera-init", e => {
        // console.log(`${e.detail.position.longitude} ${e.detail.position.latitude}`);
        console.log("oke");
    });
};