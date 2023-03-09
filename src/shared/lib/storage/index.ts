const storage = () => {
    const getRecentSources = (): string[] => {
        const sources = localStorage.getItem("recentSources");

        if (!sources)
            return [];

        return JSON.parse(sources);
    }

    const addRecentSource = (source: string) => {
        let sources: string[] = getRecentSources();

        sources.unshift(source);
        sources = Array.from(new Set(sources));
        sources = sources.slice(0, 10);

        localStorage.setItem("recentSources", JSON.stringify(sources));
    }
    
    return {
        getRecentSources,
        addRecentSource
    }
}

export default storage();