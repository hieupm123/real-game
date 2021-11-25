var phrases = ['','','Goc nhap xa tang tu Bac vao Nam','','','su phan hoa cua thanh 3 dai dia hinh','',
'Truong Son Đong','','Gio mua va huong cac day nui','','','Mat me','','Phan lon dia hinh la doi nui','Khi hau'
,'','Bac và Đong Bac Bac Bo','Tinh chat nhiet đoi tang dan','',''];
var phrases_by_num = [3,2,0,3,3,0,2,0,2,0,4,3,0,1,0,0,4,0,0,3,2];
var qs = ['Nguyên nhân chính làm thiên nhiên phân hóa theo Bắc – Nam là sự phân hóa của'
,'Cảnh quan thiên nhiên tiêu biểu của phần lãnh thổ phía Bắc (từ dãy Bạch Mã trở ra)'
,'Nguyên nhân chính khiến nhiệt độ tăng từ Bắc và Nam là'
,'Đặc điểm nào sau đây không thuộc khí hậu phần lãnh thổ phía Nam?'
,'Thiên nhiên phần lãnh thổ phía Bắc ( từ dãy Bạch Mã trở ra) đặc trưng cho vùng khí hậu nào'
,'Sự phân hóa thiên nhiên theo chiều Đông – Tây thể hiện rõ nhất ở'
,'Từ đông sang tây, từ biển vào đất liền, thiên nhiên nước ta có sự phân hóa thành 3 dải rõ rệt là'
,'Vùng đồi núi có mùa mưa và mùa thu và chịu tác động của gió tây khô nóng vào mùa hạ là đặc điểm của','Đặc điểm của thềm lục địa miền Trung là','Nguyên nhân chính làm thiên nhiên phân hóa theo Đông – Tây ở vùng đồi núi phức tạp là do','Đai ôn đới gió mùa trên núi( độ cao từ 2600m trở lên) có đặc điểm khí hậu'
,'Đai nhiệt đới gió mùa chiếm chủ yếu trong 3 đai cao vì'
,'Khí hậu ở đai cận nhiệt đới gió màu trên núi có đặc điểm là'
,'Hệ sinh thái đặc trưng của đai cận nhiệt đới gió mùa trên núi là'
,'Nguyên nhân dẫn đến thiên nhiên phân hóa theo đai áp cao ở nước ta là'
,'Thiên nhiên nước ta có 3 đai cao là do sự thay đổi theo độ cao của'
,'Miền Nam Trung Bộ và Nam Bộ có đặc điểm địa hình nào dưới đây?'
,'Sự bất thường của nhịp điệu mùa khí hậu, của dòng chảy sông ngòi và tính bất ổn định cao của thời tiết là những trở ngại lớn trong việc sử dụng thiên nhiên của vùng:'
,'So với miền Bắc và Đông Bắc Bắc bộ, khí hậu miền Tây Bắc và Bắc Trung Bộ có đặc điểm'
,'Nguyên nhân khiến cho khí hậu của miền Bắc và và Đông Bắc Bắc Bộ lạnh hơn miền Tây Bắc và Bắc Trung Bộ là do'
,'Những trở ngại lớn trong quá trình sử dụng tự nhiên của miền Nam Trung Bộ và Nam Bộ là'
];
var dao = ['','','Góc nhập xạ &&&& từ &&& vào &&&','','','sự phân hóa của thành 3 dải &&& &&&&','','&&&&&& Sơn &&&&','','&&& mùa và hướng các &&& núi',''
,'','&&& &&','','Phần lớn &&& &&&& && &&& &&&','&&& &&&','','&&& và Đông &&& &&& Bộ'
,'Tính chất &&&&& &&& tăng dần','',''];
var type = [1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1];
var tick = [['Địa hình','Vị trí địa lí','Khí hậu','Hướng núi'],['Đới rừng cận xích đạo gió mùa','Đới rừng nhiệt đới gió mùa','Đới rừng xích đạo ','Đới rừng lá kim'],[]
,['Nhiệt độ trung bình năm trên 25 độ','Biên độ nhiệt trung bình năm nhỏ','Biên độ nhiệt trung bình năm lớn','Biên độ nhiệt trung bình năm lớn'],
['Cận nhiệt đơi hải dương','Nhiệt đới lục địa','Nhiệt đới ẩm gió mùa có mùa đông lạnh','Cận xích đạo gió mùa'],[],['Vùng biển- vùng đất – vùng trời','Vùng biển và thềm lục địa – vùng đồng bằng ven biển – vùng đồi núi','Vùng biển và thềm lục địa – vùng đồi núi thấp – vùng đồi núi cao','Vùng biển – vùng đồng bằng – vùng cao nguyên']
,[],['Mở rộng, đáy nông, có nhiều đảo, nhiều sông lớn đổ ra','Thu hẹp, đáy sâu, có sông, suối nhỏ đổ ra biển','Diện tích rộng, bằng phẳng, có các bãi triều thấp, phẳng','Hẹp ngang, bị chia cắt và phân dải'],[]
,['Mát mẻ, nhiệt độ trung bình dưới 20 độ','Quanh năm lạnh, nhiệt độ trung bình dưới 10 độ','Mùa hạ nóng (trung bình trên 25 độ), mùa đông lạnh dưới 10 độ','Quanh năm nhiệt độ dưới 15 độ, mùa đông dưới 5 độ']
,['địa hình núi cao chỉ chiếm 1% diện tích cả nước','địa hình ¾ là đồi núi','đồng bằng và đồi núi thấp chiểm 85%','đồng bằng chỉ chiếm ¼ diện tích'],[]
,['Rừng lá kim trên đất feralit có mùn','Rừng gió mùa lá rộng thường xanh','Rừng lá kim trên đất feralit','Rừng cận nhiệt đới lá rộng thường xanh'],[],[]
,['Các dãy núi có hướng vòng cung mở ra phái bắc','Các dãy núi xem kẽ các thung lung sông cùng hướng tây bắc – đông nam','Nơi duy nhất ở Việt Nam có đủ 3 đai cao','Gồm các khối núi cổ, các sơn nguyên bóc mòn, các cao nguyên badan'],[],[]
,['ảnh hưởng giảm sút hơn của gió mùa Đông Bắc','Nhờ bức chắn địa hình của dãy Hoàng Liên Sơn cao đồ sộ','Tác động của các cánh cung hút gió mùa đông Bắc','Địa hình chủ yếu là núi cao, cao nguyên']
,['độ dốc sông ngòi lớn','thiếu nước vào mùa khô, ngập lụt trên diện rộng','sự thất thường của nhịp điệu mùa','bão lũ, trượt lở đất, hạn hán']];

$("div button").mouseenter(function(){
 	$("<audio></audio>").attr({ 
 		'src':'audio/blop.aac', 
 		'volume':0.1,
		'autoplay':'autoplay'
 	}).appendTo("body");
}); 
var prenum = 0;
var map1 = new Map();
var cnt = 0;
const getRandomPhraseAsArray = arr =>{
    var randomNum = Math.floor(Math.random() * phrases.length);
    var randomPhrases = phrases[randomNum].split('');
    while(map1[randomNum]){
        var randomNum = Math.floor(Math.random() * phrases.length);
        var randomPhrases = phrases[randomNum].split('');
    }
    prenum = randomNum;
    map1[randomNum] = 1;
    return randomPhrases;
}
var ar_with_bt_sol = null;
const addPhraseToDisplay = arr => {
    if(type[prenum] == 0){
        ct_button.style.display = 'block';
        for(let i =0 ; i<phrases[prenum].length;i++){
            var listItem = document.createElement('input');
            var listItem_tron = document.createElement('li')
            // document.write(arr[i])
            listItem.innerHTML = phrases[prenum][i];
            listItem_tron.innerHTML = dao[prenum][i];
            dap_an.appendChild(listItem);
            tron.appendChild(listItem_tron);
            if(listItem.textContent === ' '){
                listItem.classList.add('spacee');
                listItem_tron.classList.add('space');
            }else{
                listItem.classList.add('letter');
                listItem_tron.classList.add('letterr');
            }
            listItem.classList.add('sol');
            listItem_tron.classList.add('sug');
        }
    }else{
        ct_button.style.display = 'none';
        for(let i = 0 ; i<4;i++){
            // console.log()
            var listItem = document.createElement('button');
            listItem.innerHTML = tick[prenum][i];
            dap_an.appendChild(listItem);   
            listItem.className = "bt_sol";
            listItem.addEventListener('click', () => {
                const letter = document.querySelectorAll('.letter');
                const show = document.querySelectorAll('.show');
                const h3 = document.querySelector('.result');
                const phraseDiv = document.getElementById('phrase');
                if(phrases_by_num[prenum] == i + 1){
                    overlay.className = 'win'; 
                    h3.textContent = 'You Won, Nice One!';
                    startGameBtn.textContent = 'Câu tiếp theo đi!';
                    overlay.style.display = 'flex';
                    phraseDiv.style.display = 'none';
                    howTo.style.display = 'none';
                    btn__resetss.style.display = "none";
                    ok = 0;
                    ++kq;
                    // reset();
                }else{
                    overlay.className = 'lose';
                    h3.textContent = 'Sorry, you lost :(';
                    startGameBtn.textContent = 'Chơi lại đi người anh em!';
                    overlay.style.display = 'flex';
                    phraseDiv.style.display = 'none';
                    howTo.style.display = 'none'
                    btn__resetss.style.display = "none";
                    ok = 0;
                }
                console.log('cua cau tn');
                reset();
            });
        }
    }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

startGameBtn.addEventListener('click', ()=>{
    if(type[prenum]){
        scoreboard.style.display = 'none';
        ct_button.style.display = 'none';
    }else{
        scoreboard.style.display = 'block';
        ct_button.style.display = 'block';
        setTimeout(function(){
            $('#scoreboard').fadeIn(500); //scoreboard
         }, 500);
    }
    $('.header').text(qs[prenum]);
    setTimeout(function(){
        $('.header').fadeIn(500); //header
     }, 500);
    setTimeout(function(){
        $('#phrase').fadeIn(500); //phrases
     }, 500);
    setTimeout(function(){
        $('.keyrow1').fadeIn(500); //keyrow1
     }, 500);
     setTimeout(function(){
        $('.keyrow2').fadeIn(1000); //keyrow2
     }, 500);
     setTimeout(function(){
        $('.keyrow3').fadeIn(1500); //keyrow3
     }, 500);

 });
 

startGameBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const checkLetter = button => {
    var found = null;
    if(type[prenum] == 0){
        const checkLetter = document.querySelectorAll('.sol');
        const res = document.getElementsByTagName('input');
        for(let i =0; i<checkLetter.length;i++){
            if(button.textContent.toUpperCase() === phrases[prenum][i].toUpperCase()){
                checkLetter[i].classList.add('show');
                res[i].value = button.textContent;
                res[i].style.pointerEvents = "none";
                found = button;
            }
        }
    }
    return found;
}
var ok = 0;
qwertyDiv.addEventListener('click', (e) =>{
    if(type[prenum] == 0){
        if(e.target.tagName === 'BUTTON'){
           const buttonPressed = e.target;
            buttonPressed.className = 'chosen';
            
            if(buttonPressed.className === 'chosen'){
                buttonPressed.disabled = true;
            }
            const letterFound = checkLetter(buttonPressed);
            const tries = document.querySelectorAll('.tries img');
            
            if(letterFound === null){
                tries[missed].src = 'images/lostHeart.png';
                missed++;
            }
        }
        checkWin();
    }
});
const checkWin = () => {

    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const h3 = document.querySelector('.result');
    const phraseDiv = document.getElementById('phrase');
    if(show.length === letter.length){
        overlay.className = 'win'; 
        h3.textContent = 'You Won, Nice One!';
        startGameBtn.textContent = 'Câu tiếp theo đi!';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none';
        howTo.style.display = 'none';
        btn__resetss.style.display = "none";
        ok = 0;
        ++kq;
        console.log('cua check win');
        reset();
        return;
    }
    else if(missed >= 5){
        overlay.className = 'lose';
        h3.textContent = 'Sorry, you lost :(';
        startGameBtn.textContent = 'Chơi lại đi người anh em!';
        overlay.style.display = 'flex';
        phraseDiv.style.display = 'none';
        howTo.style.display = 'none'
        btn__resetss.style.display = "none";
        ok = 0;
        console.log('cua check win');
        reset();
        return;
    }

}
ct_button.addEventListener('click', () =>{
    let check = 1;
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const h3 = document.querySelector('.result');
    const phraseDiv = document.getElementById('phrase');
        const res = document.getElementsByTagName('input');
        for(let i = 0; i < res.length; ++i){
            if(res[i].value.toUpperCase() == phrases[prenum][i].toUpperCase() || phrases[prenum][i] == ' '){
                // console.log(res[i].value.toUpperCase(),phrases[prenum][i].toUpperCase())
                continue;
            }else{
                overlay.className = 'lose';
                h3.textContent = 'Sorry, you lost :(';
                startGameBtn.textContent = 'Chơi lại đi người anh em!';
                overlay.style.display = 'flex';
                phraseDiv.style.display = 'none';
                howTo.style.display = 'none'
                btn__resetss.style.display = "none";
                check = 0;
                break;
            }
        }
        if(check == 1){
            overlay.className = 'win'; 
            h3.textContent = 'You Won, Nice One!';
            startGameBtn.textContent = 'Câu tiếp theo đi!';
            overlay.style.display = 'flex';
            phraseDiv.style.display = 'none';
            howTo.style.display = 'none';
            btn__resetss.style.display = "none";
            ++kq;
        }
        console.log('cua nut check');

        reset();
});
const reset = () => {
        if(cnt >= 19){
            alert("Điểm số của bạn:" + kq.toString() + "/20");
            window.location.href = "./new.html";
        }else{
            prenum++;
            ++cnt;
            console.log(cnt,prenum);
            overlay.className = 'start';
            missed = 0;
            dap_an.innerHTML = "";
            tron.innerHTML = "";
            phraseDiv.style.display = '';

            const liveHeart = document.querySelectorAll('.tries img');
            
            for(let i =0; i< liveHeart.length;i++){
               
                liveHeart[i].src = 'images/liveHeart.png';
            }

            let removeChosen = document.querySelectorAll('.chosen');
            for(let i =0;i<removeChosen.length;i++){
                removeChosen[i].classList.remove('chosen');
                removeChosen[i].disabled = false;
            }
            
            const phraseArray = getRandomPhraseAsArray(phrases);
            addPhraseToDisplay(phraseArray);
            $('.header').text(qs[prenum]);
        }
    // });
}