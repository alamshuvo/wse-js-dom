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

  * Sucessful response:

            200.ok
            The request suceeded the result meaning of sucess depends on the HTTP method :
            সফলতার ফলাফলের অর্থ ব্যাখ্যা করার অনুরোধটি এইচটিটিপি পদ্ধতির উপর নির্ভর করে:

            Get: The resource has been fetched and transmitted in the message body.
            রিসোর্সটি বার্তা বডিতে আনা এবং প্রেরণ করা হয়েছে।

            Head:The representation headers are included in the response without any message body.
            প্রতিনিধিত্ব শিরোনামগুলি কোনও বার্তা বডি ছাড়াই প্রতিক্রিয়াতে অন্তর্ভুক্ত করা হয়।


            Put or Post : The resource discribing the result of the action is transmitted in the massage body.
            ক্রিয়াটির ফলাফল বর্ণনাকারী সংস্থানটি ম্যাসেজ দেহে প্রেরণ করা হয়।
            Trace: The massage  body contains the request massages as received by the server.         
             ম্যাসেজ বডিতে সার্ভার দ্বারা প্রাপ্ত অনুরোধ ম্যাসেজ রয়েছে।         
      201.created.

            The request suceeded ,and a new resource was created as a result .This is typically the response sent after post request or some put request.
             অনুরোধটি সফল হয়েছিল, এবং ফলস্বরূপ একটি নতুন সংস্থান তৈরি হয়েছিল। এটি সাধারণত পোস্ট অনুরোধ বা কিছু অনুরোধের পরে প্রেরিত প্রতিক্রিয়া।

      202.Accepted.
           The request has been received but not yet acted upon.It is non committal ,since there is no way in HTTP  to later send as asyncnronous response indicating the outcame of the request It is indended for cases where another process or server handles the request or for bath processing.
            অনুরোধটি গ্রহণ করা হয়েছে তবে এখনও পদক্ষেপ নেওয়া হয়নি। এটি অযৌক্তিক, যেহেতু এইচটিটিপিতে পরবর্তীতে অনুরোধের আউটকে নির্দেশ করে অ্যাসিঙ্ক্রোনাস প্রতিক্রিয়া হিসাবে প্রেরণের কোনও উপায় নেই, এটি এমন ক্ষেত্রে রক্ষণাবেক্ষণ করা হয় যেখানে অন্য কোনও প্রক্রিয়া বা সার্ভার অনুরোধটি পরিচালনা করে বা স্নান প্রক্রিয়াকরণের জন্য।

      
      203.Non authoritative information
          The response code means the returnend metadata is not exactly the same as is available form the origin server ,but is collected form a local or a third party copy. This is mostly used for mirrors or backups or another resource .Expect for that spacipic case ,the 200 ok response is prepared to this status 
          প্রতিক্রিয়া কোডের অর্থ রিটার্নএন্ড মেটাডেটা মূল সার্ভার থেকে উপলব্ধ ঠিক একই নয়, তবে স্থানীয় বা তৃতীয় পক্ষের অনুলিপি থেকে সংগ্রহ করা হয়। এটি বেশিরভাগ আয়না বা ব্যাকআপ বা অন্য কোনও সংস্থানের জন্য ব্যবহৃত হয়। সেই স্প্যাসিপিক কেসের জন্য আশা করুন, এই স্ট্যাটাসের জন্য 200 OK প্রতিক্রিয়া প্রস্তুত 
          
      204.No content 
          
          There is no content to send for this request,but the headers may be useful .The user agent may update its cached headers for this resource with the  new ones.
            এই অনুরোধের জন্য পাঠানোর জন্য কোনও সামগ্রী নেই, তবে শিরোনামগুলি দরকারী হতে পারে। ব্যবহারকারী এজেন্ট এই সংস্থানের জন্য তার ক্যাশেড শিরোনামগুলি নতুনগুলির সাথে আপডেট করতে পারে।
      
      205.Reset content 
          
          Tells the user agent to reset the document which sent this request .
            ব্যবহারকারী এজেন্টকে এই অনুরোধটি প্রেরণকারী নথিটি পুনরায় সেট করতে বলে।

      206.partial content
         
          This response code is used when the header is sent form the clint to request only part of a resource.
           এই প্রতিক্রিয়া কোডটি ব্যবহার করা হয় যখন শিরোনামটি ক্লিন্ট থেকে কোনও সম্পদের কেবল অংশের অনুরোধ করার জন্য প্রেরণ করা হয়।

      207.Multi status (web dev)

          conveys information about multiple resources,for situtions where multiple status codes might be appropriat
           একাধিক সংস্থান সম্পর্কে তথ্য প্রদান করে, যেখানে একাধিক স্ট্যাটাস কোড ব্যবহার করা যেতে পারে

      208.Already reported (web dev)

         Used inside a response element to avoid repetedly enumerating the internal members of multiple bindings to the same collection.
            একই সংগ্রহে একাধিক বন্ধনের অভ্যন্তরীণ সদস্যদের পুনরায় চিহ্নিত করা এড়াতে একটি প্রতিক্রিয়া উপাদানের অভ্যন্তরে ব্যবহৃত হয়।

      226.Im used (HTTP delta encoding)

         The server has fulfiled a get request for the resource ,and the response is a representation of the result of one or more instance-manipulation applied to the curent instance .
           সার্ভারটি রিসোর্সটির জন্য একটি গেট অনুরোধ পূরণ করেছে, এবং প্রতিক্রিয়াটি নিরাময়ের উদাহরণে প্রয়োগ করা এক বা একাধিক উদাহরণ-ম্যানিপুলেশনের ফলাফলের প্রতিনিধিত্ব করে।


* Redirection masseges 

      300.Multiple choce 

         The request has more than one possible response .The user agent or user should choose one of them .(There is no standarized way of choosing one of the response ,but HTML link to the possibilitis are recomanded so the user can pick )
                অনুরোধের একাধিক সম্ভাব্য প্রতিক্রিয়া রয়েছে। ব্যবহারকারী এজেন্ট বা ব্যবহারকারীতাদের মধ্যে একটি চয়ন করা উচিত। (প্রতিক্রিয়াগুলির মধ্যে একটি চয়ন করার কোনও স্ট্যান্ডারাইজড উপায় নেই, তবে পসিবিলাইটিসের এইচটিএমএল লিঙ্কটি পুনরায় তৈরি করা হয় যাতে ব্যবহারকারী চয়ন করতে পারে)

      301.Moved permanently 

         The URL of the requested resource has been changed permanently .The new URl is given in the response .
           অনুরোধকৃত সম্পদের URL স্থায়ীভাবে পরিবর্তিত হয়েছে। প্রতিক্রিয়ায় নতুন ইউআরএল দেওয়া হয়েছে।

     302.Found 
        The response code means that the URl of requested resource has been changed temporally .Farther changes in the URL might be made in the future .Therefore this same URL should be used by the clint in future request .
         প্রতিক্রিয়া কোডের অর্থ হ'ল অনুরোধকৃত সম্পদের ইউআরএল সাময়িকভাবে পরিবর্তিত হয়েছে। ভবিষ্যতে ইউআরএল-এ আরও পরিবর্তন করা যেতে পারে। অতএব এই একই ইউআরএলটি ভবিষ্যতের অনুরোধে ক্লিন্ট দ্বারা ব্যবহার করা উচিত।

      303.See other 
        The server sent this response to direct the clint to get the requested resource at another URL with  a get request .
         সার্ভার এই প্রতিক্রিয়াটি ক্লিন্টকে একটি গেট রিকোয়েস্টের সাথে অন্য ইউআরএল-এ অনুরোধকৃত সংস্থানটি পেতে নির্দেশ দেওয়ার জন্য প্রেরণ করেছিল।

      304.Not modified 

       This is used for caching purpose .It tels the clint that the responses has not been modified .
       so the clint can continuee to used the same cached version to the response .
         এটি ক্যাশিং উদ্দেশ্যে ব্যবহৃত হয়। এটি ক্লিন্টকে বলে যে প্রতিক্রিয়াগুলি সংশোধন করা হয়নি।
       সুতরাং ক্লিন্ট প্রতিক্রিয়াতে একই ক্যাশেড সংস্করণ ব্যবহার চালিয়ে যেতে পারে।

     305.Use proxy 

       Define in a previous version of the HTTP specification to indicate that a requested response must be accesed by a proxy.It has been depreceted due to security concern regarding in barand configration of proxy.
         এইচটিটিপি স্পেসিফিকেশনের পূর্ববর্তী সংস্করণে সংজ্ঞায়িত করুন যাতে বোঝা যায় যে একটি অনুরোধকৃত প্রতিক্রিয়া অবশ্যই একটি প্রক্সি দ্বারা গ্রহণ করা উচিত। প্রক্সি রক্ষণাবেক্ষণ এবং কনফিগারেশন সম্পর্কিত নিরাপত্তা উদ্বেগের কারণে এটি বাতিল করা হয়েছে।

      306.Unused 
      This response code is no longer used :it is just reserved .It was used in a previous version of the HTTP spacation .
      এই প্রতিক্রিয়া কোডটি আর ব্যবহৃত হয় না: এটি কেবল সংরক্ষিত। এটি এইচটিটিপি স্পেসেশনের পূর্ববর্তী সংস্করণে ব্যবহৃত হয়েছিল।

   307 Temporary Redirect.

       The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
          সার্ভার ক্লায়েন্টকে পূর্ববর্তী অনুরোধে ব্যবহৃত একই পদ্ধতির সাথে অন্য ইউআরআইতে অনুরোধকৃত সংস্থানটি পেতে নির্দেশ দেওয়ার জন্য এই প্রতিক্রিয়াটি প্রেরণ করে। এটিতে 302 ফাউন্ড এইচটিটিপি প্রতিক্রিয়া কোডের মতো একই শব্দার্থরয়েছে, ব্যতিক্রম যে ব্যবহারকারী এজেন্টকে অবশ্যই ব্যবহৃত এইচটিটিপি পদ্ধতিপরিবর্তন করতে হবে না: যদি প্রথম অনুরোধে কোনও পোস্ট ব্যবহার করা হয় তবে দ্বিতীয় অনুরোধে অবশ্যই একটি পোস্ট ব্যবহার করতে হবে।

   308 Permanent Redirect
       This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request. 
         এর অর্থ হ'ল সংস্থানটি এখন স্থায়ীভাবে অন্য ইউআরআইতে অবস্থিত, অবস্থান: এইচটিটিপি প্রতিক্রিয়া শিরোনাম দ্বারা নির্দিষ্ট। এটিতে 301 মুভ স্থায়ীভাবে এইচটিটিপি প্রতিক্রিয়া কোডের মতো একই শব্দার্থরয়েছে, ব্যতিক্রম যে ব্যবহারকারী এজেন্টকে অবশ্যই ব্যবহৃত এইচটিটিপি পদ্ধতিটি পরিবর্তন করতে হবে না: যদি প্রথম অনুরোধে কোনও পোস্ট ব্যবহার করা হয় তবে দ্বিতীয় অনুরোধে অবশ্যই একটি পোস্ট ব্যবহার করতে হবে। 
    


* Clint eror responses >>


      400.Bad request .
         The server cannot or will  not process   the requst due to something perecive to be a clint error  
             সার্ভারটি ক্লিন্ট ত্রুটি হওয়ার কারণে রিকুস্টটি প্রক্রিয়া করতে পারে না বা করবে না 

      401.Unauthorized .
            Although the HTTP standard specifies "unauthorized " semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
            যদিও এইচটিটিপি স্ট্যান্ডার্ড "অননুমোদিত" শব্দার্থগতভাবে নির্দিষ্ট করে তবে এই প্রতিক্রিয়াটির অর্থ "অপ্রমাণিত"। অর্থাৎ, ক্লায়েন্টকে অবশ্যই অনুরোধকৃত প্রতিক্রিয়া পেতে নিজেকে প্রমাণীকরণ করতে হবে।

      402.payment requaried .
           This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
            এই প্রতিক্রিয়া কোডটি ভবিষ্যতে ব্যবহারের জন্য সংরক্ষিত। এই কোডটি তৈরির প্রাথমিক লক্ষ্য ছিল এটি ডিজিটাল পেমেন্ট সিস্টেমের জন্য ব্যবহার করা, তবে এই স্ট্যাটাস কোডটি খুব কমই ব্যবহৃত হয় এবং কোনও স্ট্যান্ডার্ড কনভেনশন বিদ্যমান নেই।
      
      403.Forbidden .
          The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
          ক্লায়েন্টের সামগ্রীতে অ্যাক্সেস অধিকার নেই; অর্থাৎ, এটি অননুমোদিত, তাই সার্ভার অনুরোধকৃত রিসোর্স দিতে অস্বীকার করছে। 401 অননুমোদিতের বিপরীতে, ক্লায়েন্টের পরিচয় সার্ভারের কাছে পরিচিত।

      404.Not found .

         The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.

            সার্ভার অনুরোধকৃত রিসোর্সটি খুঁজে পাচ্ছে না। ব্রাউজারে, এর অর্থ ইউআরএল সনাক্ত করা হয় না। একটি এপিআইতে, এর অর্থ এটিও হতে পারে যে শেষ পয়েন্টটি বৈধ তবে সংস্থানটি নিজেই বিদ্যমান নয়। সার্ভারগুলি অননুমোদিত ক্লায়েন্টের কাছ থেকে কোনও সম্পদের অস্তিত্ব লুকানোর জন্য নিষিদ্ধ 403 এর পরিবর্তে এই প্রতিক্রিয়াটিও পাঠাতে পারে। ওয়েবে ঘন ঘন ঘটার কারণে এই প্রতিক্রিয়া কোডটি সম্ভবত সর্বাধিক সুপরিচিত।

      405 Method Not Allowed
         The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.
         405 পদ্ধতি অনুমোদিত নয়
         অনুরোধ পদ্ধতিটি সার্ভার দ্বারা পরিচিত তবে লক্ষ্য সংস্থান দ্বারা সমর্থিত নয়। উদাহরণস্বরূপ, একটি API কোনও সংস্থান অপসারণ করতে DELETE কল করার অনুমতি নাও দিতে পারে।

      406 Not Acceptable
          This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
          406 গ্রহণযোগ্য নয়
          এই প্রতিক্রিয়াটি পাঠানো হয় যখন ওয়েব সার্ভার, সার্ভার-চালিত সামগ্রী আলোচনা সম্পাদন করার পরে, ব্যবহারকারী এজেন্ট দ্বারা প্রদত্ত মানদণ্ডের সাথে সামঞ্জস্যপূর্ণ কোনও সামগ্রী খুঁজে পায় না।


      407 Proxy Authentication Required
          This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
          407 প্রক্সি প্রমাণীকরণ আবশ্যক
          এটি 401 অননুমোদিতের অনুরূপ তবে একটি প্রক্সি দ্বারা প্রমাণীকরণ করা প্রয়োজন। 
      
      408 Request Timeout
          This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
          408 রিকোয়েস্ট টাইমআউট
          এই প্রতিক্রিয়াটি ক্লায়েন্টের কোনও পূর্ববর্তী অনুরোধ ছাড়াই কিছু সার্ভার দ্বারা একটি নিষ্ক্রিয় সংযোগে প্রেরণ করা হয়। এর অর্থ সার্ভার এই অব্যবহৃত সংযোগটি বন্ধ করতে চাইবে। ক্রোম, ফায়ারফক্স 27+ বা আইই 9 এর মতো কিছু ব্রাউজার সার্ফিংয়ের গতি বাড়ানোর জন্য এইচটিটিপি প্রাক-সংযোগ প্রক্রিয়া ব্যবহার করে বলে এই প্রতিক্রিয়াটি আরও বেশি ব্যবহৃত হয়। এছাড়াও মনে রাখবেন যে কিছু সার্ভার এই বার্তাটি প্রেরণ না করে কেবল সংযোগটি বন্ধ করে দেয়।

      409 Conflict
          This response is sent when a request conflicts with the current state of the server. 
          ৪০৯ সংঘাত
          যখন কোনও অনুরোধ সার্ভারের বর্তমান অবস্থার সাথে দ্বন্দ্ব করে তখন এই প্রতিক্রিয়াটি প্রেরণ করা হয়।


      410 Gone
           This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
           410 জন চলে গেছেন
           অনুরোধকৃত বিষয়বস্তু সার্ভার থেকে স্থায়ীভাবে মুছে ফেলা হলে, কোনও অগ্রবর্তী ঠিকানা ছাড়াই এই প্রতিক্রিয়াটি প্রেরণ করা হয়। ক্লায়েন্টরা তাদের ক্যাশে এবং সংস্থানের লিঙ্কগুলি সরিয়ে ফেলবে বলে আশা করা হচ্ছে। এইচটিটিপি স্পেসিফিকেশন এই স্ট্যাটাস কোডটিকে "সীমিত সময়ের, প্রচারমূলক পরিষেবাদি" এর জন্য ব্যবহার করতে চায়। এপিআইগুলি এই স্থিতি কোডদিয়ে মুছে ফেলা সংস্থানগুলি নির্দেশ করতে বাধ্য হওয়া উচিত নয়।
      411 Length Required
           Server rejected the request because the Content-Length header field is not defined and the server requires it
           411 দৈর্ঘ্য প্রয়োজন
           সার্ভার অনুরোধটি প্রত্যাখ্যান করেছে কারণ বিষয়বস্তু-দৈর্ঘ্য শিরোনাম ক্ষেত্রটি সংজ্ঞায়িত করা হয়নি এবং সার্ভারের এটি প্রয়োজন

      