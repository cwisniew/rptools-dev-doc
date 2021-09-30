
# Handshake and Authentication
Last Updated: MapTool 1.10

The handshake and authentication occurs via protobuf messages before any Hessian serialization occurs. Once the handshake and authentication is succcessful only then will Hessian serialization be used for passing messages between server and client. (This is likely to change in MapTool 1.11 or MapTool 1.12 where Hessian will be completely replaced by protobuf)

## Blocked Player
If a player is blocked then the Server will inform the client of this before trying perform any password or public key authentication.

```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
    Client->>Server: ClientInitMsg
    Server->>Server: Lookup Player from ClientInitMsg<br/>
    Server->>Client: Send PlayerBlockedMsg
    Client->>Client: Inform Player<br/>and disconnect.
```

## Player using public key authentication
If the player is not blocked and is authenticating with a public key then the following authentication/handshake sequence occurs. The public key has to be known to the Server before a player can attempt to authenticat this way.

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
If the player is not blocked and is authentiating with a shared password the following authentication/handsake squence occurs. As a shared password could be per player or role based (i.e. a single password for players and another single password for GMs) the server creates a challenge for both GM and Player and which ever the client can respond to determines the role. If a password database is used where the role is recorded and the Server knows if the player is a GM or not then a new random password will be used to encrypt the non pertinant handshake challenge ensureing it should never match.

```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'signalColor': '#e0081a', 'textColor': '#e0081a' }}}%%
  sequenceDiagram
  Client->>Server: ClientInitMsg
Server->>Server: Lookup Player from ClientInitMsg and<br/>retrieve password salt
Server->>Server: Create HandshakeChallenge<br/>Player Password
note right of Server: If using player database<br/> with known players and player<br/>is GM then a new random<br/>password is used so this<br/> would never match.
Server->>Server: Create HandshakeChallenge<br/>GM Password
note right of Server: If using player database<br/> with known players and player<br/>is not a GM then a new random<br/>password is used so this<br/> would never match.
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


## Protocal Buffers
```protobuf reference title="Handshake Protocal Buffers"
https://github.com/RPTools/maptool/blob/develop/src/main/proto/handshake.proto
``` 