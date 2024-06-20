import OpenAI from "openai";

const openAICall = async (text) => {
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     prompt:
    //       "Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n" +
    //       text +
    //       "",
    //     temperature: 0.5,
    //     max_tokens: 60,
    //     top_p: 1.0,
    //     frequency_penalty: 0.8,
    //     presence_penalty: 0.0,
    //   }),
    // };
    // try {
    //   const response = await fetch(
    //     import.meta.env.VITE_OPENAI_API_URI,
    //     options
    //   );
    //   const json = await response.json();
    //   console.log(json.choices[0].text.trim());
    //   setKeywords(json.choices[0].text.trim());
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    // }


const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: `Extract the Keywords from ${text}`,
    temperature: 0.5
  });

  console.log(completion.choices[0]);



}

export default openAICall