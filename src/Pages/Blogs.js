import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1>Blogs</h1>

           <div className='row'>
           <div className='col-md-4 answer'>
                <h2>Context API: its uses?</h2>
                <p>যেহেতু, আমরা props-এর মাধ্যমে ডাটা পাঠায়, যা সহজতর মনে হলেও, অনেকগুলো কম্পোনেন্ট-এ propsএর মাধ্যমে ডাটা পাঠাতে জটিলতা তৈরী হয়। এর পরিপ্রেক্ষিতে, Context API একটি সহজতর পদ্ধতি, যা ডাটা পাসিং-কে গতিশীলতা দিয়েছে। অর্থাৎ যেখানে ডাটা দরকার, সেখানে Context API-এর মাধ্যমে data পাস করলেই ডাটা পাওয়া যায়। </p>
            </div>
            <div className='col-md-4 answer'>
                <h2>Inline, Block and Inline-Block elements?</h2>
                <p>Block element গুলো default ভাবে horizontally full width নিয়ে থাকে, এবং ব্রাউসার autometically কিছু margin দিয়ে দেয়। এর জন্য প্রত্যেকবার নতুন লাইন তৈরী করে </p>
                <p>Inline element গুলো, তাদের যে অবস্থান, সেখানকার অবস্থানই সে দখল করে । এই জন্য তারা, পাশাপাশি অবস্থান করে । এর জন্য প্রত্যেকবার নতুন লাইন তৈরী করে না।</p>
                <p>কোনো একটা block element-কে inline করার জন্য inline-block ব্যবহার করি। যেখানে width/height অথবা margin/padding ব্যবহার করতে পারি। </p>
            </div>
            <div className='col-md-4 answer'>
                <h2>Semantice Tag?</h2>
                <p>যে HTML tag-গুলো অর্থপূর্ণ কিছু অবস্থা বা অবস্থান বুঝায়, যা browser বা developer বুঝতে পারে। যেমন, article, header, footer, nav, main, section, aside প্রভৃতি। সেগুলোকে semantic tag বলা হয়। <br />
                আর যেখানে div বা span-গুলোকে class attribute-এর মাধ্যমে বলে দিতে হয় যে, এইটা header, footer, article, nav প্রভৃতি। যা non-semantic নামে পরিচিত।  </p>
            </div>
           </div>
        </div>
    );
};

export default Blogs;