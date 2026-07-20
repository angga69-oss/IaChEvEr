const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
        'Authorization': `Token ${apiKey}`, // r8_IncqeH45KcDdG4hzumdNaom61vkxmCU20cbFS
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        version: 'model-id-video', // Contoh: model wan2.6-t2v
        input: { prompt: prompt }
    })
});