import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const callOpenAI = async (message, context, messageHistory) => {
  try {
    console.log('=== OpenAI API 요청 ===');
    console.log('Context:', context);
    console.log('Message History:', messageHistory);
    console.log('Current Message:', message);

    const conversationHistory = messageHistory.map(msg => ({
      role: msg.isUser ? "user" : "assistant",
      content: msg.text
    }));

    const messages = [
      {
        role: "system",
        content: `당신은 미술관 도슨트 AI입니다. 관람객의 질문에 친절하게 답변해주세요. 
        현재 관람객의 질문: "${context}"`
      },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    const usage = completion.usage;

    console.log('=== OpenAI API 응답 ===');
    console.log('AI Response:', response);
    console.log('Token Usage:', usage);

    return {
      content: response,
      usage: usage
    };
  } catch (error) {
    console.error('OpenAI API 호출 중 오류:', error);
    return {
      content: '죄송합니다. 일시적인 오류가 발생했습니다.',
      error: error.message
    };
  }
}; 