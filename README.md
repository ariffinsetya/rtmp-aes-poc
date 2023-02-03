Simple Proof of Concept AES HLS ENCRYPTED STREAMING
# Prerequisites
- Docker
- Docker Compose
- OBS/FFMPEG for streaming rtmp
# Step by step
1. docker-compose up
1. Stream to rtmp://localhost:3935/stream/test
1. Watch via http://localhost:9081/player - PLAYABLE
1. Try to watch http://localhost:9080/hls/test.m3u8 via other player (vlc, hls.js in other html page etc) - UNPLAYABLE