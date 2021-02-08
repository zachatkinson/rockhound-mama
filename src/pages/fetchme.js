import React, { useState, useEffect } from "react"

const IndexPage = () => {
    const [starsCount, setStarsCount] = useState(0)
    useEffect(() => {
        // get data from GitHub api
        fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                setStarsCount(resultData.stargazers_count)
            }) // set data for the number of stars
    }, [])

    return (
        <section>
            <p>Runtime Data: Star count for the Gatsby repo {starsCount}</p>
        </section>
    )
}

export default IndexPage