# Sample-json

### วิธีการทดสอบ

1. สร้างบอทสำหรับทดสอบใน https://sid.hbot.io
2. ไปที่หน้า Config
3. ทำการ Import ไฟล์ `2112017_1578.hbot`
4. เชื่อมต่อกับเพจเพื่อทดสอบ

---

## JSON API

body:
```json
{
	"nodes" : [
		{ NODE_1 },
		{ NODE_2 }
	]
}
```

---
## Node Type
- Text
- Image
- Audio
- Video
- File
- Carousel
- Set Attributes
- Go To Block

---

### Node Type Text

```json
{
	"node_type":"node",
	"nodeResponse": {
		"type": "text",
		"response": "This is message"
	}
}
```
---

### Node Type Image
```json
{
	"node_type":"node",
	"nodeResponse": {
		"type": "image",
		"response": "https://www.example.com/xxx/yyy/zzz.png"
	}
}
```
---

### Node Type Audio
```json
{
  "node_type": "node",
  "nodeResponse": {
    "type": "audio",
    "response": "https://www.example.com/xxx/yyy/zzz.mp3"
  }
}
```
---

### Node Type Video
```json
{
  "node_type": "node",
  "nodeResponse": {
    "type": "video",
    "response": "https://www.example.com/xxx/yyy/zzz.mp4"
  }
}
```
---

### Node Type File
```json
{
  "node_type": "node",
  "nodeResponse": {
    "type": "file",
    "response": "https://www.example.com/xxx/yyy/zzz.pdf"
  }
}
```
---

### Node Type Carousel
```json
{
  "node_type": "carousel",
  "image_aspect_ratio": "horizontal",
  "nodeResponse": {
    "type": "carousel",
    "response": [{
        "title": "Title",
        "subtitle": "Subtitle",
        "image_url": "https://www.example.com/xxx/yyy/zzz.png",
        "buttons": [{
            "title": "buttonA",
            "type": "web_url",
            "url": "https://www.example.com",
            "webview_height_ratio": "tall" 
          }, {
            "title": "buttonB",
            "type": "show_block",
            "block_ids": ["BLOCK_A_ID", "BLOCK_B_ID"]
          }
        ]
      }
    ]
  }
}
```

| Field 								| Description 
|-----------------------|-----------------
| `image_aspect_ratio`	| Can be `horizontal` or `square`

**Note:** Max carousel number is 11, Max button number for each carousel is 3.


---


### Node Type Set Attributes
```json
{
  "node_type": "set_attr",
  "todo": [{
    "attr_name": "ชื่อ Attribute",
		"attr_value": "ค่าที่จะเก็บ"
  }]
}
```

---


### Node Type Go To Block
```json
{
  "node_type": "gotoblock",
  "directions": [{
    "conditions": [{
        "condition": "and",
        "first_val": "{{first_name}}",
        "operation": "=",
        "second_val": "xxxxx"
      }
    ],
    "goto": ["BLOCK_A_ID", "BLOCK_B_ID"]
  }]
}
```

| Field 			| Description 
|-------------|-----------------
| `condition`	| Can be `and` or `or`
| `first_val` | If use `{{attribute}}` it will be replace with user attribute
| `operation`	| Can be "=", "!=", ">", "<", ">=" or "<="

---

#### Button
Button has 2 types - `web_url` and `show_block` which specify on `type` attribute

**Web url**
```json
"buttons":  [
	{
    "title": "buttonA",
    "type": "web_url",
    "url": "https://www.example.com",
    "webview_height_ratio": "tall"
  }
]
```

*NOTE:* `webview_height_ratio` can be `tall`, `full`, and `compact`

*NOTE 2:* Max buttons number is 3.

**Show Block**
```json
"buttons":  [
	{
    "title": "buttonB",
    "type": "show_block",
    "block_ids": ["BLOCK_A_ID", "BLOCK_B_ID"]
  }
]
```
