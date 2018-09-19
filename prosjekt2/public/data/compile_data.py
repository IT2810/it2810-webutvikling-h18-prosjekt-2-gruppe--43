import random
import json

images = [
    'assets/images/undraw_blank_canvas_3rbb.svg',
    'assets/images/undraw_Calculator_0evy.svg',
    'assets/images/undraw_city_driver_jh2h.svg',
    'assets/images/undraw_designer_life_w96d.svg',
    'assets/images/undraw_in_the_pool_c5h0.svg',
    'assets/images/undraw_on_the_office_fbfs.svg',
    'assets/images/undraw_personalization_triu.svg',
    'assets/images/undraw_product_teardown_elol.svg',
    'assets/images/undraw_science_fqhl.svg',
    'assets/images/undraw_server_status_5pbv.svg',
    'assets/images/undraw_track_and_field_33qn.svg',
    'assets/images/undraw_wireframing_nxyi.svg'
]

sounds = [
    'assets/sounds/Black_Ant_-_01_-_Fater_Lee.mp3',
    'assets/sounds/BoxCat_Games_-_10_-_Epic_Song.mp3',
    'assets/sounds/Broke_For_Free_-_01_-_Night_Owl.mp3',
    'assets/sounds/Broke_For_Free_-_05_-_Something_Elated.mp3',
    'assets/sounds/Gillicuddy_-_05_-_Springish.mp3',
    'assets/sounds/Jahzzar_-_05_-_Siesta.mp3',
    'assets/sounds/Jason_Shaw_-_RUNNING_WATERS.mp3',
    'assets/sounds/Kai_Engel_-_04_-_Moonlight_Reprise.mp3',
    'assets/sounds/Monk_Turner__Fascinoma_-_01_-_Its_Your_Birthday.mp3',
    'assets/sounds/Podington_Bear_-_Starling.mp3',
    'assets/sounds/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3',
    'assets/sounds/Tours_-_01_-_Enthusiast.mp3'
]

nouns = [
    'range',
    'discussion',
    'baby',
    'chance',
    'place',
    'stitch',
    'stage',
    'toes',
    'honey',
    'trick',
    'reaction',
    'love'
]

adjectives = [
    'square',
    'aboard',
    'sweet',
    'recondite',
    'blue',
    'precious',
    'elated',
    'flawless',
    'overjoyed',
    'unequal',
    'wandering',
    'vulgar'
]

authors = [
    'Dave Matthews',
    'Marilyn Monroe',
    'William Shatner',
    'John Travolta',
    'Drew Barrymore',
    'Jaden Smith',
    'Daniel Radcliffe',
    'Leonardo DiCaprio',
    'Julia Roberts',
    'Franco Nero',
    'Chuck Lorre',
    'LeBron James',
    'Paris Hilton',
    'Mark Harmon',
    'Denzel Washington',
    'Justin Timberlake',
    'Sean Penn',
    'Ray Romano',
    'Jay Leno',
    'Liv Tyler',
    'Chris Brown',
    'Ron Howard',
    'Bruce Springsteen',
    'Channing Tatum'
]

texts = [
    'What have those lonely mountains worth revealing?<br>More glory and more grief than I can tell:<br>The earth that wakes one human heart to feeling<br>Can centre both the worlds of Heaven and Hell.',
    'Although I knew that we had lost<br>The hope and glory of our life;<br>And now, benighted, tempest-tossed,<br>Must bear alone the weary strife.',
    'No, they won’t let me out of winter,<br>and I’ve promised myself,<br>even if I’m the last snowman,<br>that I’ll ride into spring<br>on their melting shoulders.',
    'What is all this juice and all this joy?<br>A strain of the earth’s sweet being in the beginning <br>In Eden garden. – Have, get, before it cloy,<br>Before it cloud, Christ, lord, and sour with sinning,<br>Innocent mind and Mayday in girl and boy,<br>Most, O maid’s child, thy choice and worthy the winning.',
    'And salted was my food, and my repose,<br>Salted and sobered, too, by the bird’s voice<br>Speaking for all who lay under the stars,<br>Soldiers and poor, unable to rejoice.',
    'But most, like Chaos - Stopless - cool -<br>Without a Chance, or spar -<br>Or even a Report of Land -<br>To justify - Despair.',
    'I sat on a gray stone bench<br>ringed with the ingenue faces<br>of pink and white impatiens<br>and placed my grief<br>in the mouth of language,<br>the only thing that would grieve with me.',
    'What if last night I was the one who lay dead<br>While the dead burned beside me<br>Trembling with passionate pity<br>At my blameless life and shaking its flamelike head?',
    'Why have you pushed him from his world into mine,<br>stopped him there and turned his ear<br>toward my warning shout?',
    'But still the rich confusion of the sea,<br>Unceasing voice, sombre and solacing,<br>Rises through veils of silence past the trees;<br>In restless repetition bound, yet free,<br>Wave after wave in deluge fresh releasing<br>An ancient speech, hushed in tremendous ease.',
    'I sat on a gray stone bench<br>ringed with the ingenue faces<br>of pink and white impatiens<br>and placed my grief<br>in the mouth of language,<br>the only thing that would grieve with me.',
    'If I could dwell<br>Where Israfel<br>Hath dwelt, and he where I,<br>He might not sing so wildly well<br>A mortal melody,<br>While a bolder note than this might swell<br>From my lyre within the sky.'
]

images_source = 'https://undraw.co'
sounds_source = 'http://freemusicarchive.org/'
texts_source = 'https://www.poetryoutloud.org/poems-and-performance/random-poem'

def random_title():
    adjective = random.choice(adjectives).capitalize()
    noun = random.choice(nouns).capitalize()
    return f'{adjective} {noun}'

def random_author():
    return random.choice(authors)

images_obj = { 'data': { 'images': [] } }
sounds_obj = { 'data': { 'sounds': [] } }
texts_obj = { 'data': { 'texts': [] } }

for i in range(12):
    category = (i % 4) + 1

    # Images
    img_title = random_title()
    img_content = images[i]
    img_author = random_author()

    images_obj['data']['images'].append({
        'title': img_title,
        'content': img_content,
        'author': img_author,
        'source': images_source,
        'category': category
    })

    # Sounds
    snd_title = random_title()
    snd_content = sounds[i]
    snd_author = random_author()

    sounds_obj['data']['sounds'].append({
        'title': snd_title,
        'content': snd_content,
        'author': snd_author,
        'source': sounds_source,
        'category': category
    })

    # Texts
    txt_title = random_title()
    txt_content = texts[i]
    txt_author = random_author()

    texts_obj['data']['texts'].append({
        'title': txt_title,
        'content': txt_content,
        'author': txt_author,
        'source': texts_source,
        'category': category
    })

with open('images.json', 'w', encoding='utf8') as f:
    f.write(json.dumps(images_obj, indent=4, ensure_ascii=False))

with open('sounds.json', 'w', encoding='utf8') as f:
    f.write(json.dumps(sounds_obj, indent=4, ensure_ascii=False))

with open('texts.json', 'w', encoding='utf8') as f:
    f.write(json.dumps(texts_obj, indent=4, ensure_ascii=False))

print('Done')