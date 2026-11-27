# THE WORLD — Friday, 27 November 2026

[![make.fun](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/aris99i/news-image-27nov/rank.svg)](https://make.fun/bounty/news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/aris99i/news-image-27nov/reward.svg)](https://make.fun/bounty/news-image-20261127)

An entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261127)
**"Sum up 27 November's world news in one image"** — $100 shared by the 50
best entries, judged pairwise by an AI picture editor.

## The image

A one-page world newspaper, **THE WORLD — Friday, 27 November 2026**,
summing up the day in seven stories, from the Gulf to New York, Pyongyang
to Frankfurt, Jerusalem to Dhaka:

1. **IRANIAN DRONES DOWNED OVER KUWAIT** — Kuwait intercepts an Iranian
   drone attack; four hurt, two killed, Gulf flights diverted. (Euronews)
2. **STORMS POSTPONE MACY'S PARADE** — Thanksgiving travel chaos across
   America as the New York parade moves to Saturday. (NPR)
3. **PYONGYANG HALTS MISSILES TO MOSCOW** — North Korea suspends KN-23
   ballistic-missile supplies to Russia. (Reuters)
4. **TRUMP AND NATO CHIEF TALK UKRAINE** — President presses Putin to pull
   back after talks with NATO's secretary general.
5. **NEW CHIEF FOR EUROPE'S CENTRAL BANK** — Pablo Hernández de Cos picked
   to lead the ECB as Lagarde steps down.
6. **NETANYAHU: TRIAL HAS COLLAPSED** — Judges question key corruption
   charges against Israel's prime minister.
7. **BANGLADESH BRACES FOR SHUTDOWN** — Buses torched ahead of a two-day
   opposition shutdown.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — a
1024×1024 image — to `/output/entry.png`. Two runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
