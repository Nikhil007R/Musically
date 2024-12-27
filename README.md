# API Endpoints

## Global Search Router
**Base Path:** `/api/search`

| Endpoint                      | Functionality                     |
|-------------------------------|------------------------------------|
| `/api/search/:name`           | Search across all categories (`global`) |
| `/api/search/songs/:name`     | Search songs (`globalSongs`)      |
| `/api/search/artists/:name`   | Search artists (`globalArtists`)  |
| `/api/search/playlists/:name` | Search playlists (`globalPlaylists`) |
| `/api/search/albums/:name`    | Search albums (`globalAlbums`)    |

---

## Songs Router
**Base Path:** `/api/songs`

| Endpoint                      | Functionality                     |
|-------------------------------|------------------------------------|
| `/api/songs/search/:name`     | Search songs by name (`byName`)   |
| `/api/songs/:ids`             | Retrieve songs by ID (`byId`)     |
| `/api/songs/:id/lyrics`       | Fetch song lyrics (`byLyrics`)    |
| `/api/songs/:id/suggestions`  | Fetch song suggestions (`bySuggestions`) |

---

## Albums Router
**Base Path:** `/api/albums`

| Endpoint                      | Functionality                     |
|-------------------------------|------------------------------------|
| `/api/albums/:id`             | Fetch album details by ID (`albumById`) |

---

## Artists Router
**Base Path:** `/api/artists`

| Endpoint                      | Functionality                     |
|-------------------------------|------------------------------------|
| `/api/artists/search/:name`   | Search artists by name (`artistsByName`) |
| `/api/artists/:id`            | Fetch artist details by ID (`artistsById`) |
| `/api/artists/:id/songs`      | Fetch songs by artist ID (`artistsBySongs`) |
| `/api/artists/:id/albums`     | Fetch albums by artist ID (`artistsByAlbums`) |

---

## Playlists Router
**Base Path:** `/api/playlists`

| Endpoint                      | Functionality                     |
|-------------------------------|------------------------------------|
| `/api/playlists/:id`          | Fetch playlist details by ID (`playlistById`) |
