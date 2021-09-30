
# Handshake and Authentication
Last Updated: MapTool 1.10

The handshake and authentication occurs before Hessian is used

## Blocked Player
```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player from ClientInitMsg<br/>
    Server->>Client: Send PlayerBlockedMsg
    Client->>Client: Inform Player<br/>and disconnect.
```

## Player using public key authentication
```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player from ClientInitMsg<br/>and retrieve password salt
    Server->>Server: Create HandshakeChallenge
    Server->>Server: Encrypt Challenge with public key
    Server->>Client: Send UseAuthTypeMsg
    Note right of Server: auth_type = ASYMMETRIC_KEY<br/> challenge[0] = HandshakeChallenge.challenge
    Client->>Client: Decrypt Handshake Challenge
    Client->>Server: Send ClientAuthMsg
    Note left of Client:(not encrypted)<br/>challenge_response = HanshakeChallenge.response
    Server->>Client: Send ConnectionSuccessfulMsg
```

## Player using shared password authentication
```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
  Client->>Server: ClientInitMsg
Server->>Server: Lookup Player from ClientInitMsg and<br/>retrieve password salt
Server->>Server: Create HandshakeChallenge<br/>Player Password
note right of Server: If using player database<br/> with known players and player<br/>is GM then a new random<br/>password is used so this<br/> would never match.
Server->>Client: Send UseAuthTypeMsg
note right of Client: auth_type = SHARED_PASSWORD<br/> salt = retrieved password salt<br/> challenge[0] = HandshakeChallenge.challenge (gm)<br/> challenge[1] = HandshakeChallenge.challenge (player)<br/>
Client->>Client: Hash password with<br/>PBKDF2WithHmacSHA1<br/>using salt sent by Server
Client->>Client: Try decrypt both challenges
Client->>Client: Encrypt HandshakeChallenge.response
Client->>Server: Send ClientAuthMsg
note right of Server: challenge_response = Encrypted HandshakeChallenge.response
Server->>Server: Compare client challenge response to<br/>preencrypted challenge response on server<br/>side to determine which password was used
Server->>Client: Send ConnectionSuccessfulMsg
```