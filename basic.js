window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const entity = document.createElement("a-sphere");
            entity.setAttribute("scale", {
                x: 1000, 
                y: 1000,
                z: 1000
            });
            entity.setAttribute('material', { color: 'red' } );
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);
        }
        testEntityAdded = true;
    });
};
