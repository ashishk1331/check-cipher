const plain_text_map: Record<number, string> = {
    1: "the sun was glittering high like a great piece of gold\ni was out walking on the sinking sands without any hold\nsoon knelt down i was panting hard amidst the lone desert\nto the very ends no one could have been seen except the lizards\nmy whole face was firmly wrapped in a black cloth",
    2: "while i wore baggy ivory white clothes for my troth.\ni didn't want to miss my odds for that bleak warm terrain\nmizan, they say lived there under the sun's reign\nthe ruler of those fluid sands, the master of that mystical land\nthey say only lost travelers had seen her by chance.",
    3: "but i was determined to find her before death found me\nbefore slipped away the dice and so there goes she\nas the sand laden wind blown across my face\ni finally saw a woman standing afar tied in black lace.\nsimilar black cloth pieces fluttered to great lengths",
    4: "i saw those eyes set at me and the emotion hence\ni didn't know what she meant or wanted from me\nas her splendid hair covered her face mostly.\nit seemed she knew very well why i was there\ndie trying on that barren land without any heir",
    5: "whole of the eternity froze between us\neven the hasty blowing wind hushed.\nall her hair fell on her shoulders straight\nand i saw her goddess like face and my dying fate\nshe called out my name which echoed in that space",
    6: "and her diction conveyed that she ruled that place.\ni sprang to my feet and started racing towards her\nsoon ended the space and she turned into invar\ni got dragged inside a ferocious whirlpool of sand\nand found myself again knelt down on my hands.",
    7: "i was startled from what had just happened\ni regretted my move and how all of it came to an end\nas i stood up i was holding a golden taj\nso i did saw mizan or all was just a mirage?"
};

export async function POST(request: Request) {
    const { plain_text, day_number } = await request.json();
    
    const normalizeText = (text: string) => 
        text.replace(/\r?\n|\r/g, '').replace(/\\n/g, '').trim();

    const referenceText = normalizeText(plain_text_map[day_number]).toLowerCase();
    const userText = normalizeText(plain_text).toLowerCase();

    const check = referenceText === userText;

    return Response.json({ check });
}
