var posts=["blog/1/","blog/10/","blog/11/","blog/12/","blog/13/","blog/14/","blog/15/","blog/16/","blog/17/","blog/18/","blog/2/","blog/20/","blog/21/","blog/22/","blog/23/","blog/24/","blog/25/","blog/26/","blog/19/","blog/27/","blog/28/","blog/29/","blog/3/","blog/30/","blog/31/","blog/32/","blog/33/","blog/34/","blog/36/","blog/37/","blog/38/","blog/39/","blog/35/","blog/40/","blog/41/","blog/4/","blog/43/","blog/44/","blog/42/","blog/45/","blog/46/","blog/47/","blog/48/","blog/49/","blog/5/","blog/52/","blog/54/","blog/50/","blog/51/","blog/53/","blog/55/","blog/58/","blog/59/","blog/57/","blog/56/","blog/6/","blog/62/","blog/60/","blog/61/","blog/63/","blog/65/","blog/68/","blog/67/","blog/69/","blog/7/","blog/70/","blog/72/","blog/64/","blog/66/","blog/73/","blog/74/","blog/75/","blog/76/","blog/77/","blog/79/","blog/8/","blog/81/","blog/78/","blog/80/","blog/83/","blog/85/","blog/82/","blog/84/","blog/86/","blog/71/","blog/9/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}