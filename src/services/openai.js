import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const callOpenAI = async (message, context, messageHistory, onStream) => {
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
        content: `당신은 사용자의 기억과 경험을 경청하고 공감하는 AI 친구입니다.
        사용자의 이야기에 따뜻하고 짧은 공감 답변을 제공해주세요.
        긴 설명이나 조언은 하지 말고, 다음과 같은 형식의 간단한 공감 표현만 해주세요:
        - "정말 좋은 추억이네요"
        - "그런 경험을 하셨다니 멋지네요"
        - "그때가 참 특별했겠어요"
        - "저도 함께 있었다면 좋았을 것 같아요"
        현재 사용자의 이야기: "${context}"`
      },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      temperature: 0.7,
      stream: true
    });

    let fullResponse = '';
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullResponse += content;
      onStream(content);
    }

    console.log('=== OpenAI API 응답 ===');
    console.log('AI Response:', fullResponse);

    return {
      content: fullResponse
    };
  } catch (error) {
    console.error('OpenAI API 호출 중 오류:', error);
    return {
      content: '죄송합니다. 일시적인 오류가 발생했습니다.',
      error: error.message
    };
  }
}; 