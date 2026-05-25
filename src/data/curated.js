const curatedSongs = [
  {
    title: "Goodness of God",
    artist: "Bethel Music",
    key: "G",
    bpm: 72,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["G", "C", "Em", "D"],
        duration: 8,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Cadd9 x32030, Em7 022030, Dsus4 x00233",
        technique: "Ambient swells with delay"
      },
      {
        label: "Verse",
        chords: ["G", "C", "Em", "D"],
        duration: 16,
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Cadd9 x32030, Em7 022030, Dsus4 x00233",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "Move between E-form and open",
        voicingNotes: "G 320003, D/F# 2x0032, Em7 022030, Cadd9 x32030",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["Em", "D", "C", "G"],
        duration: 8,
        cagedPosition: "Open position",
        voicingNotes: "Em7 022030, Dsus4 x00233, Cadd9 x32030, G 320003",
        technique: "Climax, ambient"
      }
    ]
  },
  {
    title: "Way Maker",
    artist: "Leeland",
    key: "E",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["A", "B", "C#m", "B/D#"],
        duration: 8,
        cagedPosition: "A-form moving to E-form",
        voicingNotes: "A x02220, B x24442, C#m x46654, B/D# x6444x",
        technique: "Full strum, delay drenched"
      }
    ]
  },
  {
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    key: "D",
    bpm: 76,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D / C-form",
        voicingNotes: "Dsus4 xx0233, Asus4 x02230, Bm7 x24232, G 320003",
        technique: "Ambient swells with delay"
      },
      {
        label: "Chorus",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D / C-form",
        voicingNotes: "D xx0232, A x02220, Bm7 x24232, G 320003",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["G", "A", "Bm", "D/F#"],
        duration: 8,
        cagedPosition: "G-form moving to E-form",
        voicingNotes: "G 320003, A x02220, Bm7 x24232, D/F# 2x0032",
        technique: "Climax, ambient"
      }
    ]
  },
  {
    title: "Jireh",
    artist: "Elevation Worship / Maverick City",
    key: "A",
    bpm: 74,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["A", "E", "F#m", "D"],
        duration: 8,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "A barre at fret 5 (577655), E barre at fret 7 (779997), F#m barre at fret 2 (244222), D barre at fret 5 (557775)",
        technique: "Ambient swells with delay"
      },
      {
        label: "Verse",
        chords: ["A", "E", "F#m", "D"],
        duration: 16,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "A barre at fret 5 (577655), E barre at fret 7 (779997), F#m barre at fret 2 (244222), D barre at fret 5 (557775)",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["A", "E", "F#m", "D"],
        duration: 16,
        cagedPosition: "E-form (A) at fret 5",
        voicingNotes: "A barre at fret 5 (577655), E barre at fret 7 (779997), F#m barre at fret 2 (244222), D barre at fret 5 (557775)",
        technique: "Full strum, delay drenched"
      }
    ]
  },
  {
    title: "Build My Life",
    artist: "Passion / Brett Younker",
    key: "C",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["C", "G", "Am", "F"],
        duration: 16,
        cagedPosition: "C-form",
        voicingNotes: "C x32010, G 320003, Am x02210, Fmaj7 x33210",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["C", "G", "Am", "F"],
        duration: 16,
        cagedPosition: "C-form",
        voicingNotes: "C x32010, G 320003, Am x02210, Fmaj7 x33210",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["Am", "G", "F", "C"],
        duration: 8,
        cagedPosition: "Am-form moving to C-form",
        voicingNotes: "Am x02210, G 320003, Fmaj7 x33210, C x32010",
        technique: "Pad with reverb"
      }
    ]
  },
  {
    title: "Graves Into Gardens",
    artist: "Elevation Worship",
    key: "E",
    bpm: 76,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Intro",
        chords: ["E", "B", "C#m", "A"],
        duration: 8,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Ambient swells with delay"
      },
      {
        label: "Verse",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["A", "E", "B", "C#m"],
        duration: 8,
        cagedPosition: "A-form moving through",
        voicingNotes: "A x02220, E 022100, B x24442, C#m x46654",
        technique: "Climax, ambient"
      }
    ]
  },
  {
    title: "O Come to the Altar",
    artist: "Elevation Worship",
    key: "G",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["G", "Em", "C", "D"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "G 320003, Em7 022030, Cadd9 x32030, Dsus4 x00233",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Strummed, medium gain"
      }
    ]
  },
  {
    title: "Who You Say I Am",
    artist: "Hillsong Worship",
    key: "G",
    bpm: 75,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Building, adding delay"
      }
    ]
  },
  {
    title: "Reckless Love",
    artist: "Cory Asbury",
    key: "E",
    bpm: 72,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Pad with reverb"
      },
      {
        label: "Chorus",
        chords: ["E", "B", "C#m", "A"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "E 022100, B x24442, C#m x46654, A x02220",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["A", "E", "B", "C#m"],
        duration: 8,
        cagedPosition: "A-form to E-form",
        voicingNotes: "A x02220, E 022100, B x24442, C#m x46654",
        technique: "Full strum, delay drenched"
      }
    ]
  },
  {
    title: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman",
    key: "G",
    bpm: 73,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus",
        chords: ["G", "D", "Em", "C"],
        duration: 16,
        cagedPosition: "E-form",
        voicingNotes: "G 320003, D/F# 2x0032, Em7 022030, Cadd9 x32030",
        technique: "Strummed, medium gain"
      }
    ]
  },
  {
    title: "The Blessing",
    artist: "Elevation Worship / Kari Jobe",
    key: "D",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Verse",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D",
        voicingNotes: "Dsus4 xx0233, Asus4 x02230, Bm7 x24232, G 320003",
        technique: "Ambient swells with delay"
      },
      {
        label: "Chorus",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D",
        voicingNotes: "D xx0232, A x02220, Bm7 x24232, G 320003",
        technique: "Building, adding delay"
      },
      {
        label: "Bridge",
        chords: ["D", "A", "Bm", "G"],
        duration: 16,
        cagedPosition: "Open D",
        voicingNotes: "D xx0232, A x02220, Bm7 x24232, G 320003",
        technique: "Full strum, delay drenched"
      }
    ]
  }
];

export default curatedSongs;
