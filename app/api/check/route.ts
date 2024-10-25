const plain_text_map: Record<number, string> = {
    1: "the darkling thrush\nby thomas hardy\ni leant upon a coppice gate\nwhen frost was spectre-grey,\nand winter's dregs made desolate",
    2: 'the weakening eye of day.\nthe tangled bine-stems scored the sky\nlike strings of broken lyres,\nand all mankind that haunted nigh\nhad sought their household fires.',
    3: "the land's sharp features seemed to be\nthe century's corpse outleant,\nhis crypt the cloudy canopy,\nthe wind his death-lament.\nthe ancient pulse of germ and birth",
    4: 'was shrunken hard and dry,\nand every spirit upon earth\nseemed fervourless as i.\nat once a voice arose among\nthe bleak twigs overhead',
    5: 'in a full-hearted evensong\nof joy illimited;\nan aged thrush, frail, gaunt, and small,\nin blast-beruffled plume,\nhad chosen thus to fling his soul',
    6: 'upon the growing gloom.\nso little cause for carolings\nof such ecstatic sound\nwas written on terrestrial things\nafar or nigh around,',
    7: 'that i could think there trembled through\nhis happy good-night air\nsome blessed hope, whereof he knew\nand i was unaware.'
};

export async function POST(request: Request) {
    const { plain_text, day_number } = await request.json();
    
    const normalizeText = (text: string) => 
        text.replace(/\r?\n|\r/g, '').replace(/\\n/g, '').trim();

    const referenceText = normalizeText(plain_text_map[day_number]);
    const userText = normalizeText(plain_text);

    const check = referenceText === userText;

    return Response.json({ check });
}
