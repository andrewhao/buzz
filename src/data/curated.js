const curatedSongs = [
  {
    title: "Goodness of God",
    artist: "Bethel Music",
    key: "Ab",
    bpm: 63,
    timeSignature: "4/4",
    youtubeId: "IvSuGyJQ6oM",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        startTime: 0,
        duration: 8,
        lyrics: [{ t: 0, text: "[Ab]    [Db]" }],
        cagedPosition: "E-form (Ab) at fret 4",
        voicingNotes: "Ab 466544, Db x46664",
        technique: "Ambient swells with delay, let open strings ring"
      },
      {
        label: "Verse",
        startTime: 20,
        duration: 16,
        lyrics: [
          { t: 20, text: "[Ab]I love You, Lord" },
          { t: 25.7, text: "[Db]Oh Your mercy never fails me" },
          { t: 31.3, text: "[Eb/G]All my days, I've been held in Your hands" },
          { t: 37, text: "[Fm]From the moment that I wake up" },
          { t: 42.7, text: "[Ab]Until I lay my head" },
          { t: 48.3, text: "[Db]Oh, I will sing of the goodness of God" }
        ],
        cagedPosition: "E-form (Ab) at fret 4",
        voicingNotes: "Ab 466544, Db x46664, Eb/G 365xxx, Fm7 131111",
        technique: "Arpeggiated, light gain, fingerpicked pattern"
      },
      {
        label: "Chorus",
        startTime: 54,
        duration: 16,
        lyrics: [
          { t: 54, text: "[Db]All my life You have been faithful" },
          { t: 69.2, text: "[Ab]All my life You have been so, so good" },
          { t: 84.5, text: "[Eb]With every breath that I am able" },
          { t: 99.7, text: "[Fm]Oh, I will sing of the goodness of God" }
        ],
        cagedPosition: "E-form (Ab) at fret 4 moving to Db-form",
        voicingNotes: "Db x46664, Ab 466544, Eb 668886, Fm7 131111",
        technique: "Building, strummed with delay, medium gain"
      },
      {
        label: "Bridge",
        startTime: 148,
        duration: 16,
        lyrics: [
          { t: 148, text: "[Ab/C]'Cause Your goodness is running after" },
          { t: 158.2, text: "[Db]It's running after me" },
          { t: 168.3, text: "[Eb]With my life laid down, I'm surrendered now" },
          { t: 178.5, text: "[Ab]I give You everything" },
          { t: 188.6, text: "[Ab/C]'Cause Your goodness is running after" },
          { t: 198.8, text: "[Db]It keeps running after me" }
        ],
        cagedPosition: "Open position / Am-form",
        voicingNotes: "Ab/C x36544, Db x46664, Eb 668886, Ab 466544",
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
        startTime: 0,
        duration: 16,
        lyrics: [
          { t: 0, text: "[A]You are here, moving in our midst" },
          { t: 10.8, text: "[E]I worship You, I worship You" },
          { t: 21.5, text: "[B]You are here, working in this place" },
          { t: 32.3, text: "[C]I worship You, I worship You" }
        ],
        cagedPosition: "A-form (A) / E-form (E)",
        voicingNotes: "A x02220, E 022100, B x24442, C x32010",
        technique: "Fingerpicked, clean, ambient reverb"
      },
      {
        label: "Chorus",
        startTime: 43,
        duration: 16,
        lyrics: [
          { t: 43, text: "[A]Way Maker, Miracle Worker, Promise Keeper" },
          { t: 61.8, text: "[E]Light in the darkness" },
          { t: 80.6, text: "[B]My God, that is who You are" }
        ],
        cagedPosition: "A-form (A) / E-form (E)",
        voicingNotes: "A x02220, E 022100, Bsus x24452, C x32010",
        technique: "Building, strummed, adding delay"
      },
      {
        label: "Bridge",
        startTime: 137,
        duration: 16,
        lyrics: [
          { t: 137, text: "[A]Even when I don't see it, You're working" },
          { t: 151.1, text: "[E]Even when I don't feel it, You're working" },
          { t: 165.2, text: "[B]You never stop, You never stop working" },
          { t: 179.4, text: "[C]You never stop, You never stop working" }
        ],
        cagedPosition: "A-form (A) / E-form (E)",
        voicingNotes: "A x02220, E 022100, B x24442, C x32010",
        technique: "Full strum, delay drenched, crescendo"
      }
    ]
  },
  {
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    key: "D",
    bpm: 68,
    timeSignature: "4/4",
    youtubeId: "r5L6QlAH3L4",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        startTime: 0,
        duration: 16,
        lyrics: [
          { t: 0, text: "[D]You were the Word at the beginning" },
          { t: 8.8, text: "[G]One with God the Lord Most High" },
          { t: 17.5, text: "[Bm]Your hidden glory in creation" },
          { t: 26.3, text: "[A]Now revealed in You our Christ" }
        ],
        cagedPosition: "Open D / C-form (D)",
        voicingNotes:
          "Dsus4 xx0233, G 320003, Bm7 x24232, Asus4 x02230, A/C# x4222x",
        technique: "Fingerpicked, clean, spacious reverb"
      },
      {
        label: "Chorus",
        startTime: 35,
        duration: 16,
        lyrics: [
          { t: 35, text: "[D]What a beautiful Name it is" },
          { t: 43.1, text: "[A]What a beautiful Name it is" },
          { t: 51.1, text: "[Bm]The Name of Jesus Christ my King" },
          { t: 59.2, text: "[G]What a beautiful Name it is" },
          { t: 67.3, text: "[D/F#]Nothing compares to this" },
          { t: 75.3, text: "[D]What a beautiful Name it is" },
          { t: 83.4, text: "[A]The Name of Jesus" }
        ],
        cagedPosition: "Open D / C-form (D)",
        voicingNotes: "D xx0232, A x02220, Bm7 x24232, G 320003, D/F# 2x0032",
        technique: "Building, strummed, medium gain, delay"
      },
      {
        label: "Bridge",
        startTime: 172,
        duration: 16,
        lyrics: [
          { t: 172, text: "[G]Death could not hold You" },
          { t: 183.3, text: "[A]The veil tore before You" },
          { t: 194.6, text: "[Bm]You silenced the boast of sin and grave" },
          {
            t: 205.9,
            text: "[F]The heavens are roaring the praise of Your glory"
          },
          { t: 217.2, text: "[G]For You are raised to life again" }
        ],
        cagedPosition: "G-form (G) moving to E-form (D)",
        voicingNotes:
          "G 320003, A x02220, Bm7 x24232, F 133211 (borrowed bIII)",
        technique: "Climax, full strum, delay drenched, wide dynamics"
      }
    ]
  },
  {
    title: "Jireh",
    artist: "Elevation Worship & Maverick City Music",
    key: "Eb",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "mC-zw0zCCtg",
    difficulty: "intermediate",
    capo: 1,
    sections: [
      {
        label: "Intro",
        startTime: 0.0,
        duration: 3,
        lyrics: [
          { t: 0.0, text: "[Cm]    [Bb]    [Ab]    [Eb]" },
          { t: 4.5, text: "[Cm]    [Bb]    [Ab]    [Eb]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes:
          "Eb xx0232 (D shape, capo 1), Cm x24432 (Bm shape, capo 1), Bb x02220 (A shape, capo 1), Ab 320003 (G shape, capo 1)",
        technique: "Ambient swells, pad with reverb"
      },
      {
        label: "Verse 1",
        startTime: 9.0,
        duration: 8,
        lyrics: [
          {
            t: 9.0,
            text:
              "I'll never be [Cm]more loved than I [Bb]am right [Ab]now [Eb]"
          },
          {
            t: 16.0,
            text:
              "Wasn't holding You [Cm]up so there's [Bb]nothing I can do to [Ab]let You [Eb]down"
          },
          {
            t: 23.0,
            text: "It doesn't take a [Bb]trophy to [Cm]make You [Fm]proud [Eb]"
          },
          {
            t: 30.0,
            text:
              "I'll never be [Cm]more loved than I [Bb]am right [Fm]now [Eb]"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Fm 022000 (Em shape, capo 1)",
        technique: "Clean fingerpicking, open strings ringing"
      },
      {
        label: "Verse 2",
        startTime: 37.0,
        duration: 8,
        lyrics: [
          {
            t: 37.0,
            text: "Going [Cm]through a storm but I [Bb]won't go [Ab]down [Eb]"
          },
          {
            t: 44.0,
            text:
              "I hear Your [Cm]voice carried [Bb]in the rhythm of the wind to [Ab]pull me [Eb]out"
          },
          {
            t: 50.5,
            text:
              "You would cross an [Bb]ocean so I [Cm]wouldn't [Fm]drown [Eb]"
          },
          {
            t: 57.5,
            text:
              "You've never been [Cm]closer than You [Bb]are right [Fm]now [Eb]"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb xx0232, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Clean electric, gentle arpeggios"
      },
      {
        label: "Chorus 1",
        startTime: 64.0,
        duration: 8,
        lyrics: [
          { t: 64.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb]" },
          { t: 70.5, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb]" },
          {
            t: 77.5,
            text: "And [Bb]I will be con[Cm]tent in [Fm]every circum[Eb]stance"
          },
          { t: 84.5, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb xx0232, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Lightly strummed, ambient"
      },
      {
        label: "Turnaround 1",
        startTime: 91.0,
        duration: 4,
        lyrics: [
          {
            t: 91.0,
            text:
              "Forever e[Bb]nough, always e[Cm]nough, more than e[Ab]nough [Eb]"
          },
          {
            t: 97.0,
            text:
              "Forever e[Bb]nough, always e[Cm]nough, more than e[Ab]nough [Eb]"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb xx0232, Cm x24432, Bb x02220, Ab 320003",
        technique: "Building dynamics, delay drenched"
      },
      {
        label: "Verse 3",
        startTime: 105.0,
        duration: 8,
        lyrics: [
          {
            t: 105.0,
            text: "I don't wanna for[Cm]get how I [Bb]feel right [Ab]now [Eb/G]"
          },
          {
            t: 112.0,
            text:
              "On the mountain[Cm]top I can [Bb]see so clear what it's [Ab]all a[Eb/G]bout"
          },
          {
            t: 119.0,
            text: "So [Bb]stay by my [Cm]side when the [Ab]sun goes [Eb/G]down"
          },
          {
            t: 125.5,
            text: "Don't wanna for[Cm]get how I [Bb]feel right [Fm]now [Eb]"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033 (D/F# shape, capo 1)",
        technique: "Arpeggiated, light gain"
      },
      {
        label: "Chorus 2",
        startTime: 132.0,
        duration: 8,
        lyrics: [
          { t: 132.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          { t: 138.5, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          {
            t: 145.5,
            text: "And [Bb]I will be con[Cm]tent in [Fm]every circum[Eb]stance"
          },
          { t: 152.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Strummed, medium gain"
      },
      {
        label: "Turnaround 2",
        startTime: 159.0,
        duration: 4,
        lyrics: [
          {
            t: 159.0,
            text:
              "Forever e[Bb]nough, always e[Cm]nough, more than e[Ab]nough [Eb/G]"
          },
          {
            t: 166.0,
            text:
              "Forever e[Bb]nough, always e[Cm]nough, more than e[Ab]nough [Eb/G]"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Driving tom groove, open chords"
      },
      {
        label: "Bridge 1",
        startTime: 173.0,
        duration: 8,
        lyrics: [
          {
            t: 173.0,
            text: "I'm already [Bb]loved [Cm], I'm already [Ab]chosen [Eb/G]"
          },
          {
            t: 180.0,
            text:
              "I know who I [Bb]am [Cm], I know what You've [Ab]spoken [Eb/G]"
          },
          {
            t: 186.5,
            text:
              "I'm already [Bb]loved [Cm], more than I could i[Ab]magine [Eb/G]"
          },
          {
            t: 193.5,
            text: "And [Fm]that is e[Eb]nough, and [Fm]that is e[Eb]nough"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Building dynamics, steady strumming"
      },
      {
        label: "Bridge 2",
        startTime: 201.0,
        duration: 8,
        lyrics: [
          {
            t: 201.0,
            text: "I'm already [Bb]loved [Cm], I'm already [Ab]chosen [Eb/G]"
          },
          {
            t: 208.0,
            text:
              "I know who I [Bb]am [Cm], I know what You've [Ab]spoken [Eb/G]"
          },
          {
            t: 214.5,
            text:
              "I'm already [Bb]loved [Cm], more than I could i[Ab]magine [Eb/G]"
          },
          {
            t: 221.5,
            text: "And [Fm]that is e[Eb]nough, and [Fm]that is e[Eb]nough"
          }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Driving strum, full open chords"
      },
      {
        label: "Bridge 3",
        startTime: 228.0,
        duration: 12,
        lyrics: [
          {
            t: 228.0,
            text: "I'm already [Bb]loved [Cm], I'm already [Ab]chosen [Eb/G]"
          },
          {
            t: 235.0,
            text:
              "I know who I [Bb]am [Cm], I know what You've [Ab]spoken [Eb/G]"
          },
          {
            t: 242.0,
            text:
              "I'm already [Bb]loved [Cm], more than I could i[Ab]magine [Eb/G]"
          },
          {
            t: 248.5,
            text: "And [Fm]that is e[Eb]nough, and [Fm]that is e[Eb]nough"
          },
          {
            t: 255.5,
            text: "And [Ab]that is e[Eb/G]nough, and [Bb]that is e[Cm]nough"
          },
          { t: 262.5, text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Climax, heavy gain, full strumming"
      },
      {
        label: "Vamp 1",
        startTime: 270.0,
        duration: 16,
        lyrics: [
          {
            t: 270.0,
            text: "If He [Ab]dresses the lilies with [Eb/G]beauty and splendor"
          },
          { t: 273.5, text: "How [Bb]much more will He [Cm]clothe you" },
          { t: 277.0, text: "How [Ab]much more will He [Eb/G]clothe you" },
          { t: 280.5, text: "If He [Bb]watches over [Cm]every sparrow" },
          { t: 284.0, text: "How [Ab]much more does He [Eb/G]love you" },
          { t: 287.5, text: "How [Bb]much more does He [Cm]love you" },
          { t: 290.5, text: "How [Ab]much more does He [Eb/G]love you" },
          { t: 294.0, text: "How [Bb]much more does He [Cm]love you" },
          { t: 297.5, text: "How [Ab]much more does He [Eb/G]love you" },
          { t: 301.0, text: "How [Bb]much more does He [Cm]love you" },
          { t: 304.5, text: "How [Ab]much more does He [Eb/G]love you" },
          { t: 308.0, text: "How [Bb]much more does He [Cm]love you" },
          { t: 311.5, text: "How [Ab]much more does He [Eb/G]love you" },
          { t: 315.0, text: "How [Bb]much more does He [Cm]love you" },
          { t: 318.5, text: "How [Ab]much more does He [Eb/G]love you" },
          { t: 321.0, text: "How [Bb]much more does He [Cm]love you" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Dynamic interplay, responsive strumming"
      },
      {
        label: "Chorus 3",
        startTime: 324.0,
        duration: 8,
        lyrics: [
          { t: 324.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          { t: 330.5, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          {
            t: 337.5,
            text: "And [Bb]I will be con[Cm]tent in [Fm]every circum[Eb]stance"
          },
          { t: 344.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Down verse, clean electric"
      },
      {
        label: "Instrumental",
        startTime: 352.0,
        duration: 4,
        lyrics: [
          { t: 352.0, text: "[Ab]   [Eb/G]   [Bb]   [Cm]" },
          { t: 359.0, text: "[Ab]   [Eb/G]   [Bb]   [Cm]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Lead lines, delay drenched, reverb"
      },
      {
        label: "Vamp 2",
        startTime: 367.0,
        duration: 24,
        lyrics: [
          { t: 367.0, text: "[Ab]More than you [Eb/G]ask, think or imagine" },
          { t: 370.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 374.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 377.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 381.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 384.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 388.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 391.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 398.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 401.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 408.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 411.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 418.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 421.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 428.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 431.5, text: "Ac[Bb]cording to His [Cm]power working in us" },
          {
            t: 438.0,
            text: "It's [Ab]more than you [Eb/G]ask, think or imagine"
          },
          { t: 441.5, text: "Ac[Bb]cording to His [Cm]power working in us" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Building, continuous 16th note feel"
      },
      {
        label: "Tag",
        startTime: 449.0,
        duration: 4,
        lyrics: [
          { t: 449.0, text: "It's [Ab]more than e[Eb/G]nough" },
          { t: 452.5, text: "It's [Bb]more than e[Cm]nough" },
          { t: 456.0, text: "It's [Ab]more than e[Eb/G]nough" },
          { t: 459.5, text: "It's [Bb]more than e[Cm]nough" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Full dynamic, powerful strums"
      },
      {
        label: "Vamp 3",
        startTime: 464.0,
        duration: 20,
        lyrics: [
          {
            t: 464.0,
            text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough"
          },
          {
            t: 471.0,
            text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough"
          },
          {
            t: 478.0,
            text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough"
          },
          {
            t: 485.0,
            text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough"
          },
          {
            t: 492.0,
            text: "I've [Ab]never seen the righteous for[Eb/G]saken"
          },
          { t: 495.5, text: "Nor his [Bb]seed begging for [Cm]bread" },
          {
            t: 499.0,
            text: "I've [Ab]never seen the righteous for[Eb/G]saken"
          },
          { t: 502.5, text: "Nor his [Bb]seed begging for [Cm]bread" },
          {
            t: 506.0,
            text: "I've [Ab]never seen the righteous for[Eb/G]saken"
          },
          { t: 509.5, text: "Nor his [Bb]seed begging for [Cm]bread" },
          {
            t: 513.0,
            text: "I've [Ab]never seen the righteous for[Eb/G]saken"
          },
          { t: 516.5, text: "Nor his [Bb]seed begging for [Cm]bread" },
          { t: 523.0, text: "[Ab]   [Eb/G]   [Bb]   [Cm]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Spontaneous, ambient swells to climax"
      },
      {
        label: "Tag 2",
        startTime: 533.0,
        duration: 4,
        lyrics: [
          {
            t: 533.0,
            text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough"
          },
          { t: 540.0, text: "[Ab]You are e[Eb/G]nough, [Bb]You are e[Cm]nough" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Building into final chorus"
      },
      {
        label: "Chorus 4",
        startTime: 547.0,
        duration: 12,
        lyrics: [
          { t: 547.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          { t: 553.5, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          {
            t: 560.5,
            text: "And [Bb]I will be con[Cm]tent in [Fm]every circum[Eb]stance"
          },
          { t: 567.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" },
          {
            t: 574.0,
            text: "And [Bb]I will be con[Cm]tent in [Fm]every circum[Eb]stance"
          },
          { t: 581.0, text: "[Bb]Jireh [Cm], You are [Ab]enough [Eb/G]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003, Fm 022000",
        technique: "Big finish, full band"
      },
      {
        label: "Outro",
        startTime: 589.0,
        duration: 3,
        lyrics: [
          { t: 589.0, text: "[Ab]   [Eb/G]   [Bb]   [Cm]" },
          { t: 595.0, text: "[Ab]   [Eb/G]   [Bb]   [Cm]" }
        ],
        cagedPosition: "D-form (Eb)",
        voicingNotes: "Eb/G 2x0033, Cm x24432, Bb x02220, Ab 320003",
        technique: "Fading out, sustained chords"
      }
    ]
  },
  {
    title: "Build My Life",
    artist: "Passion ft. Brett Younker",
    key: "G",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "BGYpF-Jrfew",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        startTime: 0.0,
        duration: 8,
        lyrics: [{ t: 0.0, text: "[G]    [C/G]    [G/B]    [C/G]" }],
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, C/G 3x2013, G/B x20003",
        technique: "Clean fingerpicking, soft ambient pad"
      },
      {
        label: "Verse 1",
        startTime: 20.0,
        duration: 16,
        lyrics: [
          { t: 23.5, text: "[G]Worthy of every song we could ever [C/G]sing" },
          {
            t: 27.8,
            text: "[G/B]Worthy of all the praise we could ever [C/G]bring"
          },
          {
            t: 35.0,
            text: "[G]Worthy of every breath we could ever [C/G]breathe"
          },
          { t: 41.2, text: "We live for [G/B]You, we live for [C/G]You" }
        ],
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, C/G 3x2013, G/B x20003",
        technique: "Light acoustic strumming or sparse electric arpeggios"
      },
      {
        label: "Verse 2",
        startTime: 48.0,
        duration: 16,
        lyrics: [
          { t: 48.8, text: "[G]Jesus, the name above every other [C/G]name" },
          {
            t: 55.6,
            text: "[G/B]Jesus, the only one who could ever [C/G]save"
          },
          {
            t: 62.5,
            text: "[G]Worthy of every breath we could ever [C/G]breathe"
          },
          { t: 68.1, text: "We live for [G/B]You, we live for [C/G]You" }
        ],
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, C/G 3x2013, G/B x20003",
        technique: "Building dynamic layer, introducing subtle low-end rhythm"
      },
      {
        label: "Chorus",
        startTime: 76.0,
        duration: 16,
        lyrics: [
          { t: 76.0, text: "[Cmaj9]Holy, there is no one like You" },
          {
            t: 80.2,
            text: "There is [Am7]none beside You, open up my [G]eyes in wonder"
          },
          { t: 87.2, text: "And show me [Em7]who You are, and fill me" },
          {
            t: 91.5,
            text:
              "[Cmaj9]With Your heart and lead me in Your [Am7]love to those around [G]me"
          },
          { t: 100.2, text: "In Your love to [Em7]those around me" }
        ],
        cagedPosition: "C-form / Open Position",
        voicingNotes: "Cmaj9 x32002, Am7 x02010, G 320003, Em7 022030",
        technique:
          "Full rhythmic acoustic strumming, light electric overdrive pad"
      },
      {
        label: "Turnaround",
        startTime: 103.0,
        duration: 8,
        lyrics: [{ t: 103.0, text: "[Cmaj9]    [Am7]    [G]    [Em7]" }],
        cagedPosition: "C-form / Open Position",
        voicingNotes: "Cmaj9 x32002, Am7 x02010, G 320003, Em7 022030",
        technique: "Maintain steady rhythm, brief instrumental interlude"
      },
      {
        label: "Verse 1",
        startTime: 150.0,
        duration: 16,
        lyrics: [
          { t: 151.0, text: "[G]Worthy of every song we could ever [C/G]sing" },
          {
            t: 157.5,
            text: "[G/B]Worthy of all the praise we could ever [C/G]bring"
          },
          {
            t: 164.8,
            text: "[G]Worthy of every breath we could ever [C/G]breathe"
          },
          { t: 171.2, text: "We live for [G/B]You, we live for [C/G]You" }
        ],
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, C/G 3x2013, G/B x20003",
        technique: "Dropping down in dynamics, intimate texture"
      }
    ]
  },
  {
    title: "O Come to the Altar",
    artist: "Elevation Worship",
    key: "B",
    bpm: 70,
    timeSignature: "6/8",
    youtubeId: "l37MNjjqJWo",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        startTime: 0,
        duration: 8,
        lyrics: [{ t: 0, text: "[B]    [E]" }],
        cagedPosition: "E-form (B) at fret 7",
        voicingNotes: "B 799877, E 022100",
        technique: "Ambient swells with delay, clean"
      },
      {
        label: "Verse",
        startTime: 14,
        duration: 16,
        lyrics: [
          { t: 14, text: "[B]Are you hurting and broken within" },
          { t: 18.5, text: "[E]Overwhelmed by the weight of your sin" },
          { t: 23, text: "[G#m]Jesus is calling" },
          { t: 27.5, text: "[E]Have you come to the end of yourself" },
          { t: 32, text: "[B]Do you thirst for a drink from the well" },
          { t: 36.5, text: "[E]Jesus is calling" }
        ],
        cagedPosition: "E-form (B) at fret 7",
        voicingNotes: "B 799877, E 022100, G#m x46654",
        technique: "Arpeggiated, light gain, fingerpicked"
      },
      {
        label: "Chorus",
        startTime: 41,
        duration: 16,
        lyrics: [
          { t: 41, text: "[B]O come to the altar" },
          { t: 51.3, text: "[C#m7]The Father's arms are open wide" },
          { t: 61.6, text: "[G#m]Forgiveness was bought with" },
          { t: 71.9, text: "[E]The precious blood of Jesus Christ" }
        ],
        cagedPosition: "E-form (B) at fret 7",
        voicingNotes: "B 799877, C#m7 x46454, G#m x46654, E 022100",
        technique: "Strummed, medium gain, building"
      }
    ]
  },
  {
    title: "Who You Say I Am",
    artist: "Hillsong Worship",
    key: "Gb",
    bpm: 86,
    timeSignature: "6/8",
    youtubeId: "IcC1Bp13n_4",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Intro",
        startTime: 0,
        duration: 8,
        lyrics: [{ t: 0, text: "[Gb]" }],
        cagedPosition: "E-form (Gb) at fret 2",
        voicingNotes: "Gb 244322",
        technique: "Clean arpeggios, let open strings ring"
      },
      {
        label: "Verse",
        startTime: 8,
        duration: 16,
        lyrics: [
          { t: 8, text: "[Gb]Who am I that the highest King" },
          { t: 13, text: "[Ebm]Would welcome me" },
          { t: 18, text: "[Db]I was lost but He brought me in" },
          { t: 23, text: "[B]Oh His love for me" }
        ],
        cagedPosition: "E-form (Gb) at fret 2",
        voicingNotes: "Gb 244322, Ebm x68876, Dbsus4 x46664, B x24442",
        technique: "Fingerpicked, light gain, spacious"
      },
      {
        label: "Chorus",
        startTime: 28,
        duration: 16,
        lyrics: [
          { t: 28, text: "[Gb]Who the Son sets free, oh is free indeed" },
          { t: 33.6, text: "[Db]I'm a child of God, yes I am" },
          { t: 39.2, text: "[Ebm]I am chosen, not forsaken" },
          { t: 44.7, text: "[B]I am who You say I am" },
          { t: 50.3, text: "[Gb]You are for me, not against me" },
          { t: 55.9, text: "[Db]I am who You say I am" }
        ],
        cagedPosition: "E-form (Gb) at fret 2",
        voicingNotes: "Gb 244322, Db x46664, Ebm x68876, B x24442",
        technique: "Building, strummed, medium gain, delay"
      }
    ]
  },
  {
    title: "Reckless Love",
    artist: "Cory Asbury",
    key: "Gb",
    bpm: 83,
    timeSignature: "6/8",
    youtubeId: "dJJYKOpFnkA",
    difficulty: "beginner",
    capo: null,
    sections: [
      {
        label: "Verse",
        startTime: 0,
        duration: 16,
        lyrics: [
          {
            t: 0,
            text: "[Ebm]Before I spoke a word, You were singing over me"
          },
          { t: 5.8, text: "[Db]You have been so, so good to me" },
          {
            t: 11.5,
            text: "[Cb]Before I took a breath, You breathed Your life in me"
          },
          { t: 17.3, text: "[Ebm]You have been so, so kind to me" }
        ],
        cagedPosition: "Ebm-form (Ebm)",
        voicingNotes: "Ebm x68876, Db x46664, Cb x35543 (Cb = B)",
        technique: "Fingerpicked, clean, ambient reverb"
      },
      {
        label: "Chorus",
        startTime: 23,
        duration: 16,
        lyrics: [
          {
            t: 23,
            text:
              "[Ebm]Oh, the overwhelming, never-ending, reckless love of God"
          },
          {
            t: 28.8,
            text:
              "[Db]Oh, it chases me down, fights 'til I'm found, leaves the ninety-nine"
          },
          {
            t: 34.5,
            text:
              "[Cb]I couldn't earn it, I don't deserve it, still You give Yourself away"
          },
          {
            t: 40.3,
            text: "[Gb]Oh, the overwhelming, never-ending, reckless love of God"
          }
        ],
        cagedPosition: "Ebm-form (Ebm) / E-form (Gb)",
        voicingNotes: "Ebm x68876, Db x46664, Cb x35543, Gb 244322",
        technique: "Building, strummed, adding delay and gain"
      },
      {
        label: "Bridge",
        startTime: 46,
        duration: 16,
        lyrics: [
          { t: 46, text: "[Ebm]There's no shadow You won't light up" },
          { t: 51.8, text: "[Db]Mountain You won't climb up" },
          { t: 57.6, text: "[Cb]Coming after me" },
          { t: 63.3, text: "[Gb]There's no wall You won't kick down" },
          { t: 69.1, text: "[Ebm]Lie You won't tear down" },
          { t: 74.9, text: "[Db]Coming after me" }
        ],
        cagedPosition: "Ebm-form (Ebm) / E-form (Gb)",
        voicingNotes: "Ebm x68876, Db x46664, Cb x35543, Gb 244322",
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
        startTime: 0,
        duration: 8,
        lyrics: [{ t: 0, text: "[G]    [D]    [Em]    [C]" }],
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Clean strum, let open strings ring"
      },
      {
        label: "Verse",
        startTime: 26,
        duration: 16,
        lyrics: [
          { t: 26, text: "[G]Bless the Lord, O my soul" },
          { t: 34.8, text: "[D]O my soul" },
          { t: 43.5, text: "[Em]Worship His holy name" },
          { t: 52.3, text: "[C]Sing like never before" },
          { t: 61.1, text: "[G]O my soul" },
          { t: 69.8, text: "[D]I'll worship Your holy name" }
        ],
        cagedPosition: "E-form (G)",
        voicingNotes: "G 320003, Dsus4 x00233, Em7 022030, Cadd9 x32030",
        technique: "Arpeggiated, light gain, building momentum"
      },
      {
        label: "Chorus",
        startTime: 79,
        duration: 16,
        lyrics: [
          { t: 79, text: "[G]The sun comes up, it's a new day dawning" },
          { t: 92.2, text: "[D]It's time to sing Your song again" },
          {
            t: 105.3,
            text: "[Em]Whatever may pass, and whatever lies before me"
          },
          { t: 118.5, text: "[C]Let me be singing when the evening comes" }
        ],
        cagedPosition: "E-form (G)",
        voicingNotes: "D/F# 2x0032, Em7 022030, Cadd9 x32030, G 320003",
        technique: "Strummed, medium gain, full band feel"
      }
    ]
  },
  {
    title: "The Blessing",
    artist: "Elevation Worship / Kari Jobe",
    key: "B",
    bpm: 70,
    timeSignature: "4/4",
    youtubeId: "Zp6aygmvzM4",
    difficulty: "intermediate",
    capo: null,
    sections: [
      {
        label: "Verse",
        startTime: 0,
        duration: 16,
        lyrics: [
          { t: 0, text: "[B]The Lord bless you and keep you" },
          { t: 11, text: "[E]Make His face shine upon you" },
          { t: 21.9, text: "[B/D#]And be gracious to you" },
          { t: 32.9, text: "[F#sus]The Lord turn His face toward you" },
          { t: 43.9, text: "[G#m]And give you peace" }
        ],
        cagedPosition: "E-form (B) at fret 7",
        voicingNotes:
          "B 799877, E 022100, B/D# x6444x, F#sus x24452, G#m x46654",
        technique: "Spacious arpeggios, heavy reverb, ethereal pads"
      },
      {
        label: "Chorus",
        startTime: 55,
        duration: 16,
        lyrics: [
          { t: 55, text: "[G#m7]Amen, amen, amen" },
          { t: 82.4, text: "[E]Over you" }
        ],
        cagedPosition: "E-form (B) at fret 7 with G#m-form",
        voicingNotes: "G#m7 x46454, E 022100, B 799877, F# x24442",
        technique: "Building, wider strumming, medium gain, delay"
      },
      {
        label: "Bridge",
        startTime: 110,
        duration: 24,
        lyrics: [
          { t: 110, text: "[G#m7]May His favor be upon you" },
          { t: 130.6, text: "[E]And a thousand generations" },
          { t: 151.1, text: "[B]And your family and your children" },
          { t: 171.7, text: "[F#]And their children, and their children" }
        ],
        cagedPosition: "E-form (B) at fret 7 with G#m-form",
        voicingNotes: "G#m7 x46454, E 022100, B 799877, F# x24442",
        technique: "Climax, sustained pads, volume swells, ambient texture"
      }
    ]
  }
];

export default curatedSongs;
