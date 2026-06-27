async function getActivity() {
    const response = await fetch('https://github-contributions-api.jogruber.de/v4/KaviruN');

    const data = await response.json();

    console.log(data);
}

getActivity();