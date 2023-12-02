# wse-js-dom
* browser er koi doroner eror show kore ba eror ache ta niche discussion kora holo
# HTTP Responses status codes indicate wheather a specific HTTP request has been sucessfully completed . Responses are grouped in five classes 
* 1-Informational responses 100-199
* 2 - Sucessfull responses 200-299
* 3 -Redirection message 300-399
* 4 -Clint eror responses 400-499
* 5 - Server eror responses 500-599


* - 1 -Informational resposes 
     * - 100-continue 
          * -This interim  responses indicates that the clint should continue the request or ignore the response ,If the request is already finished.
          * এই অন্তর্বর্তী কালীন প্রতিক্রিয়াগুলি ইঙ্গিত দেয় যে ক্লায়েন্টের অনুরোধটি চালিয়ে যাওয়া উচিত বা প্রতিক্রিয়াটি উপেক্ষা করা উচিত, যদি অনুরোধটি ইতিমধ্যে শেষ হয়ে যায়।
        
     * - 101 - Switching protocol 
           * - The code is sent in response to an upgrade request header from the clint and indicates the protocol the server is switching to .
           * এই কোডটি ক্লায়েন্টের কাছ থেকে একটি আপগ্রেড অনুরোধ শিরোনামের প্রতিক্রিয়াহিসাবে প্রেরণ করা হয় এবং সার্ভারটি যে প্রোটোকলটিতে স্যুইচ করছে তা নির্দেশ করে।

     * - 102- Processing
           * - This code indicates that the server has received and is processing the request but no response is available yet.
           * এই কোডটি নির্দেশ করে যে সার্ভারটি অনুরোধটি পেয়েছে এবং প্রক্রিয়া করছে তবে এখনও কোনও প্রতিক্রিয়া পাওয়া যায়নি।
           