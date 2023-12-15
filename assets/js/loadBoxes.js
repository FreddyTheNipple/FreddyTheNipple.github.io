document.addEventListener("DOMContentLoaded", () => {
    const osParameterValue = getParameterValue('os');
    loadBoxList(osParameterValue);
});

function getParameterValue(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

async function loadBoxList(osFilter) {
    try {
        const response = await fetch('data/boxes.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const filteredBoxes = data.filter(box => box.os === osFilter);

        const boxList = document.getElementById('boxList');
        filteredBoxes.forEach(box => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');

            anchor.href = box.url;
            anchor.target = "_blank"
            anchor.textContent = box.name;

            listItem.appendChild(anchor);
            boxList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}