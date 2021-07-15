const iframe = document.getElementById("iframe");
const iframe_cover = document.getElementById("cover");
const funfact = document.getElementById("funfact");
const continueButton = document.getElementById("continue-button");
const header = document.getElementById("header");
const link = document.getElementById("link");

var lastButton;
function openPage(button)
{
    if (lastButton != button)
    {
        //show to iframe loading screen
        iframe_cover.style.display = 'block';
        funfact.innerText = getFunFact();

        if (lastButton != null) lastButton.parentElement.classList.remove('SelectedButton');
        button.parentElement.classList.add('SelectedButton');
        lastButton = button;
    }
    header.innerText = button.innerText;
    link.innerText = button.getAttribute("linkURL");
    link.href = button.getAttribute("linkURL");
    iframe.src = button.getAttribute("linkURL");
}
function getFunFact()
{
    const facts = [
        "Hotdogs are only 17% actual dog.",
        "Hippopotomonstrosesquippedaliophobia is the name for the fear of long words.",
        "Cows moo with regional accents.",
        "The blob of toothpaste that sits on your toothbrush is called a nurdle.",
        "Carrots just might turn you orange.",
        "Cheese is the food that gets stolen the most.",
        "Bees can sting other bees.",
        "No number before 1,000 contains the letter A.",
        "Movie trailers originally played after the movie, they 'trailed' after the movie.",
        "The Eiffel Tower can grow more than six inches during the summer",
        "Adult cats are lactose intolerant.",
        "M&Ms stand for 'Mars' and 'Murrie', the inventors of M&Ms.",
        "Cotton candy was invented by a dentist.",
        "The national animal of Scotland is the unicorn.",
        "The fire hydrant patent was lost in a fire.",
        "Can you see your nose?"
    ];
    var index = RandomRange(0, facts.length - 1);
    console.log(index);
    return facts[index];
}
function RandomRange(minInclusive, maxInclusive)
{
    return minInclusive + Math.round(Math.random() * (maxInclusive - minInclusive));
}
function onIframeLoad()
{
    continueButton.style.display = 'block';
}
function onContinue()
{
    iframe_cover.style.display = 'none';
}