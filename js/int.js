'use strict'

document.addEventListener("gesturestart", function (e)
{
    e.preventDefault();
    document.body.style.zoom = 1;
});

document.addEventListener("wheel", function (e)
{
    if (e.ctrlKey)
    {
        e.preventDefault();
    }
}, { passive: false });


document.addEventListener('keydown', function(e)
{
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '='))
    {
      e.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function ()
{
    const quotes =
    [
        { text: "Everything changes with time. You can't predict where you're gonna be next year; you have no idea...", author: "- Lil Peep" },
        { text: "I don't care what people think of me. I don't even care what happens to me. ", author: "- Lil Peep" },
        { text: "I’m now tired of being cussed. So go sleep forever end to dust.", author: "- Crystal Castles, Vanished" },
        { text: "We ignore refused consent. Animals do not repent. Courtesy to intervene. Weathered down my selfish needs.", author: "- Crystal Castles, Suffocation" },
        { text: "I'd rather be hated for who I am, than loved for who I am not.", author: "- Kurt Cobain" },
        { text: "I'm so happy because today I found my friends - they're in my head.", author: "- Kurt Cobain" }
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex].text;
    document.getElementById("author").textContent = quotes[randomIndex].author;
});

function scrollToTarget_1()
{
    document.getElementById('useless').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTarget_2()
{
    document.getElementById('paranoia').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("mail").addEventListener("click", function(event)
{
    event.preventDefault();
    
    const textElement = event.target;
    const textToCopy = textElement.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() =>
    {
        textElement.textContent = "COPIED";
        
        setTimeout(() =>
        {
            textElement.textContent = textToCopy;
        }, 650);
    }).catch(err => console.error("ERROR: ", err));
});