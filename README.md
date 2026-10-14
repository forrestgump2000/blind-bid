# Blind Bid

A two-player draft auction you play with a friend. Same budget, random lots, and a lot of trash talk.

The host opens a room, picks a category (NBA legends, Pixar movies, Fortnite skins, sodas, and about 100 more), a budget ($15, $20 or $30) and a roster size (3, 5 or 7). The friend joins with a four-letter code, and then lots flip one at a time.

## How a lot plays out

Players take turns. Who opens alternates every lot.

- **Bid** – raise the high bid by at least $1.
- **Let it go** – when they've outbid you, fold and they pay what they bid.
- **Pass** – if nobody has bid yet. The lot is only tossed if both players agree to pass, and each game allows 3 agreed passes.
- **Pay them to take it** – hand your opponent some cash and the lot goes straight onto their roster.

If you bid as much as your opponent has left, they can't answer and the lot is yours on the spot. Once one roster is full the other player picks up lots alone. When someone runs dry (or the deck runs out) any empty slots are filled with random leftovers.

At the end both players vote on whose draft is better.

## Running it

```bash
npm install
npm run dev
```

Multiplayer runs peer-to-peer over WebRTC (PeerJS). The host's browser holds the game state, so there's no backend to deploy. Refreshing either tab reconnects you to the same room.

## Data and photos

Categories live in `src/data/*.ts` as plain lists. Photos are looked up ahead of time and stored in `src/data/images.json`:

```bash
node scripts/resolve-images.ts              # look up anything new
node scripts/resolve-images.ts --retry-misses
node scripts/resolve-images.ts --exact-pass # re-check people/things by exact Wikipedia title
```

Sources: Wikipedia, Deezer (album art and artist photos), PokéAPI, fortnite-api.com, the Fortnite, Minecraft and Roblox wikis, and flagcdn. All images are hotlinked and belong to their owners.

`node scripts/make-art.ts` regenerates the app icon, favicon and social thumbnail.
