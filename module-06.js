// task 1

//const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// map

/*const listEl = document.createElement('ul');
const bodyEl = document.querySelector('body');

const makeListMarkup = technologies => {
    return technologies.map(technology =>
        `<li class="item">${technology}</li>`
    ).join("");
}

const listMarkup = makeListMarkup(technologies);
listEl.innerHTML = listMarkup;
bodyEl.prepend(listEl); */

// reduce

/*const listEl = document.createElement('ul');
const bodyEl = document.querySelector('body');

const makeListMarkup = technologies => {
    return technologies.reduce((acc, technology) => {
        acc.push(`<li class="item">${technology}</li>`);

        return acc;
    }, []).join("");

}

const listMarkup = makeListMarkup(technologies);
listEl.innerHTML = listMarkup;
bodyEl.prepend(listEl);*/

// task 2

/* const colors = [
   {
     label: "red",
     color: "#FF0000",
   },
   {
     label: "green",
     color: "#00FF00",
   },
   {
     label: "blue",
     color: "#0000FF",
   },
   {
     label: "yellow",
     color: "#FFFF00",
   },
];
 

const bodyEl = document.querySelector('body');

const makeBtnMarkup = colors => {
    return colors.map(({ label, color }) => {

        const buttonEl = document.createElement('button');

        buttonEl.textContent = label;
        buttonEl.style.color = color;

        return buttonEl;
    });
}

const btnMarkup = makeBtnMarkup(colors);
bodyEl.prepend(...btnMarkup); */

// task 3

const bodyEl = document.querySelector('body');

bodyEl.insertAdjacentHTML('afterbegin', `<main id="main">

        <h1 id="title">- Michel Legrand -</h1>

        <figure id="img-div">
            <img id="image"
                src="https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg"
                alt="Michel Legrand conducting his orchestra.">
            <figcaption id="img-caption">Michel Legrand conducting his orcherstra.</figcaption>
        </figure>

        <article id="tribute-info">
            <div id="intro">
                <p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
            </div>
            <p><u>Here are some major facts about him:</u></p>
            <ul>
                <li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li>
                <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of
                    a
                    conductor.</li>
                <li>His sister was a Soprano and a member of the Swingle Singers.</li>
                <li>Along his career, he composed more than two hundred film and television scores.</li>
                <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
                <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
                <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the
                    American Hospital of Paris.</li>
                <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
            </ul>
            <blockquote id="quote">
                <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
                <cite>-- Michel Legrand</cite>
            </blockquote>
            <hr>
            <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
                    href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
        </article>
    </main>`);



