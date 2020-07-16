var APP_DATA = {
  "scenes": [
    {
      "id": "0-v-berth",
      "name": "V-BERTH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5429813267285049,
        "pitch": 0.26938846775125036,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": 1.191275736098893,
          "pitch": 0.2178844290471229,
          "rotation": 0,
          "target": "1-vanity"
        },
        {
          "yaw": 1.7128243575711828,
          "pitch": 0.10177985142532009,
          "rotation": 0,
          "target": "2-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vanity",
      "name": "VANITY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6372062626477826,
        "pitch": 0.873513203390285,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": -2.0418886903468163,
          "pitch": 0.7877845832239672,
          "rotation": 0,
          "target": "2-head"
        },
        {
          "yaw": -0.6415440363270122,
          "pitch": 0.39570882499081783,
          "rotation": 0,
          "target": "0-v-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head",
      "name": "HEAD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5714598403948257,
        "pitch": 0.808216774547974,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": 2.2783266901777566,
          "pitch": 0.33345983583003225,
          "rotation": 0,
          "target": "1-vanity"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "30 EXPRESS -INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
