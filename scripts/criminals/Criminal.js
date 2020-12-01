

export const Criminal = (criminal) => {

    return `
        <section class = "criminal">
            <div class = "criminal__name"><h1>${criminal.name}</h1></div>
            <div class = "criminal__age">Age: ${criminal.age}</div>
            <div class = "criminal__conviction">Crime: ${criminal.conviction}</div>
            <div class = "criminal__datesOfIncarcerationStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class = "criminal__datesOfIncarcerationEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>    
    `
}