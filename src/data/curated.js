const curatedSongs = [
  {
    title: "Goodness of God",
    artist: "Bethel Music",
    key: "G",
    bpm: 72,
    timeSignature: "4/4",
    youtubeId: "IvSuGyJQ6oM",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["G", "C", "Em", "D"],
        duration: 8,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Cadd9 x32030, Em7 022030, Dsus4 x00233",
        technique: "Ambient swells with delay, let open strings ring"
      },
      {
        label: "Verse",
        chords: ["G", "C", "Em", "D"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Cadd9 x32030, Em7 022030, Dsus4 x00233",
        technique: "Arpeggiated, light gain, fingerpicked pattern"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "Move between E-form (G) and open C-form",
        voicingNotes: "D/F# 2x0032 for bass movement, Em7 022030, Cadd9 x32030",
        technique: "Building, stummed with delay, medium gain"
      },
      {
        label: "Bridge",
        chords: ["Em", "D", "C", "G"],
        duration: 16,
        cagedPosition: "Open position / Am-form (Em)",
        voicingNotes: "Em7 022030, Dsus4 x00233, Cadd9 x32030, G 320003",
        technique: "Climax, full strum, delay drenched, let ring"
      }
    ]
  },
  {
    title: "Way Maker",
    artist: "Leeland",
    key: "E",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "iJCV_2H9xD0",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form (E)",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Fingerpicked, clean, ambient reverb"
      },
      {
        label: "Chorus",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form (E)",
        voicingNotes: "Eadd9 024100 for lift, B x24442, C#m x46654, A x02220",
        technique: "Building, strummed, adding delay"
      },
      {
        label: "Bridge",
        chords: ["A", "B", "C#m", "B/D#"],
        duration: 16,
        cagedPosition: "A-form (A) moving to E-form (E)",
        voicingNotes: "A x02220, B x24442, C#m x46654, B/D# x6444x",
        technique: "Full strum, delay drenched, crescendo"
      }
    ]
  },
  {
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    key: "D",
    bpm: 76,
    timeSignature: "4/4",
    youtubeId: "r5L6QlAH3L4",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D / C-form (D)",
        voicingNotes: "Dsus4 xx0233, Asus4 x02230, Bm7 x24232, G 320003",
        technique: "Fingerpicked, clean, spacious reverb"
      },
      {
        label: "Chorus",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D / C-form (D)",
        voicingNotes: "D xx0232, A x02220, Bm7 x24232, G 320003, add D/F# 2x0032 on repeats",
        technique: "Building, strummed, medium gain, delay"
      },
      {
        label: "Bridge",
        chords: ["G", "A", "Bm", "D/F#"],
        duration: 16,
        cagedPosition: "G-form (G) moving to E-form (D)",
        voicingNotes: "G 320003, A x02220, Bm7 x24232, D/F# 2x0032",
        technique: "Climax, full strum, delay drenched, wide dynamics"
      }
    ]
  },
  {
    title: "Jireh",
    artist: "Elevation Worship / Maverick City",
    key: "A",
    bpm: 74,
    timeSignature: "4/4",
    youtubeId: "mC-zw0zCCtg",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["A", "E", "F#m", "D"],
        duration: 8,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "A barre at fret 5 (577655), E barre at fret 7 (779997), F#m barre at fret 2 (244222), D barre at fret 5 (557775)",
        technique: "Ambient swells, let open high strings ring over barre chords"
      },
      {
        label: "Verse",
        chords: ["A", "E", "F#m", "D"],
        duration: 16,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "A barre at fret 5 (577655), E barre at fret 7 (779997), F#m barre at fret 2 (244222), D barre at fret 5 (557775)",
        technique: "Arpeggiated, light gain, leave space between phrases"
      },
      {
        label: "Chorus",
        chords: ["A", "E", "F#m", "D"],
        duration: 16,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "Add Aadd9 (x02420) on chorus lift, stay in E-form position",
        technique: "Full strum, building energy, delay and reverb"
      },
      {
        label: "Bridge",
        chords: ["A", "E", "F#m", "D"],
        duration: 16,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "Open high strings (B and E) ring over all barre shapes",
        technique: "Climax, wide strumming, let open strings ring through changes"
      }
    ]
  },
  {
    title: "Build My Life",
    artist: "Passion / Brett Younker",
    key: "C",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "BGYpF-Jrfew",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["C", "G", "Am", "F"],
        duration: 16,
        cagedPosition: "C-form (C) / open position",
        voicingNotes: "C x32010, G 320003, Am x02210, Fmaj7 x33210",
        technique: "Fingerpicked, clean, open strings ringing"
      },
      {
        label: "Chorus",
        chords: ["C", "G", "Am", "F"],
        duration: 16,
        cagedPosition: "C-form (C) / open position",
        voicingNotes: "C x32010, G 320003, Am x02210, Fmaj7 x33210, add G/B x20033",
        technique: "Building, strummed, medium gain, delay"
      },
      {
        label: "Bridge",
        chords: ["Am", "G", "F", "C"],
        duration: 16,
        cagedPosition: "Am-form (Am) moving to C-form (C)",
        voicingNotes: "Am x02210, G 320003, Fmaj7 x33210, C x32010",
        technique: "Pad with reverb, crescendo into final chorus"
      }
    ]
  },
  {
    title: "Graves Into Gardens",
    artist: "Elevation Worship",
    key: "E",
    bpm: 76,
    timeSignature: "4/4",
    youtubeId: "R8oxVCFGsgY",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["E", "B", "C#m", "A"],
        duration: 8,
        cagedPosition: "E-form (E)",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Ambient swells with volume pedal, delay heavy"
      },
      {
        label: "Verse",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form (E)",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220, let open B string ring",
        technique: "Arpeggiated, light gain, building tension"
      },
      {
        label: "Chorus",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form (E) with open strings",
        voicingNotes: "Eadd9 024100, Bsus4 x24252, C#m7 x46454, Aadd9 x02420",
        technique: "Strummed, full band hits, delay drenched"
      },
      {
        label: "Bridge",
        chords: ["A", "E", "B", "C#m"],
        duration: 16,
        cagedPosition: "A-form (A) moving through E-form (E)",
        voicingNotes: "A x02220, E 022100, B x24442, C#m x46654",
        technique: "Climax, wide strumming, let chords ring into each other"
      }
    ]
  },
  {
    title: "O Come to the Altar",
    artist: "Elevation Worship",
    key: "G",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "l37MNjjqJWo",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["G", "Em", "C", "D"],
        duration: 8,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Em7 022030, Cadd9 x32030, Dsus4 x00233",
        technique: "Ambient swells with delay, clean"
      },
      {
        label: "Verse",
        chords: ["G", "Em", "C", "D"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Em7 022030, Cadd9 x32030, Dsus4 x00233",
        technique: "Arpeggiated, light gain, fingerpicked"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "D/F# 2x0032 for bass walk, Em7 022030, Cadd9 x32030",
        technique: "Strummed, medium gain, building"
      }
    ]
  },
  {
    title: "Who You Say I Am",
    artist: "Hillsong Worship",
    key: "G",
    bpm: 75,
    timeSignature: "4/4",
    youtubeId: "IcC1Bp13n_4",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["G", "D", "Em", "C"],
        duration: 8,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Clean arpeggios, let open strings ring"
      },
      {
        label: "Verse",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Fingerpicked, light gain, spacious"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "Add D/F# 2x0032 on repeat, Em7 022030, Cadd9 x32030",
        technique: "Building, strummed, medium gain, delay"
      }
    ]
  },
  {
    title: "Reckless Love",
    artist: "Cory Asbury",
    key: "E",
    bpm: 72,
    timeSignature: "4/4",
    youtubeId: "dJJYKOpFnkA",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form (E)",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Fingerpicked, clean, ambient reverb"
      },
      {
        label: "Chorus",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form (E)",
        voicingNotes: "Eadd9 024100, B x24442, C#m7 x46454, Aadd9 x02420",
        technique: "Building, strummed, adding delay and gain"
      },
      {
        label: "Bridge",
        chords: ["A", "E", "B", "C#m"],
        duration: 16,
        cagedPosition: "A-form (A) to E-form (E)",
        voicingNotes: "A x02220, E 022100, B x24442, C#m x46654",
        technique: "Full strum, delay drenched, dynamic swell into final chorus"
      }
    ]
  },
  {
    title: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman",
    key: "G",
    bpm: 73,
    timeSignature: "4/4",
    youtubeId: "r3K3roEF36k",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["G", "D", "Em", "C"],
        duration: 8,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Clean strum, let open strings ring"
      },
      {
        label: "Verse",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Arpeggiated, light gain, building momentum"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "D/F# 2x0032, Em7 022030, Cadd9 x32030, G 320003",
        technique: "Strummed, medium gain, full band feel"
      }
    ]
  },
  {
    title: "The Blessing",
    artist: "Elevation Worship / Kari Jobe",
    key: "D",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "Zp6aygmvzM4",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D / C-form (D)",
        voicingNotes: "Dsus4 xx0233, D xx0232, Asus4 x02230, Bm7 x24232, G 320003",
        technique: "Spacious arpeggios, heavy reverb, ethereal pads"
      },
      {
        label: "Chorus",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D / C-form (D)",
        voicingNotes: "D xx0232, A x02220, Bm7 x24232, G 320003, add D/F# 2x0032",
        technique: "Building, wider strumming, medium gain, delay"
      },
      {
        label: "Bridge",
        chords: ["D", "A", "Bm", "G"],
        duration: 24,
        cagedPosition: "Open D / C-form (D) with A-form (A) sections",
        voicingNotes: "Sustained chord pads, let voicings ring into each other",
        technique: "Climax, sustained pads, volume swells, ambient texture"
      }
    ]
  }
];

export default curatedSongs;
