const tagHandle = tag => {
        const slug = tag.replace(/\s+/g, '-')
         return slug.toLowerCase()
    }

    export default tagHandle