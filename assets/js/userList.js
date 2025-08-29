'use strict';

// const user = {
//     firstName: 'Test1',
//     lastName: 'Testovych',
//     age: 28,
//     photoSrc:
//         'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png',
// }

const users = [
    {
        firstName: 'Test1',
        lastName: 'Testovich1',
        age: 28,
        photoSrc: 'https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg',
    },
    {
        firstName: 'Test2',
        lastName: 'Testovich2',
        age: 31,
        photoSrc:
            'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        firstName: 'Test3',
        lastName: 'Testovich3',
        age: 70,
        photoSrc:
            'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        firstName: 'Test4',
        lastName: 'Testovich4',
        age: 20,
        photoSrc:
            'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        firstName: 'Test5',
        lastName: 'Testovich5',
        age: 28,
        photoSrc:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];

// const userCard = createUserCard(users);

const userCards = users.map(u => createUserCard(u));
document.body.append(...userCards);

function createUserCard(user) {
    const userCard = document.createElement('article');
    userCard.classList.add('userCard');

    const userImg = createImg(user);
    const userDiv = createUserInfo(user);
    const icon = createTrashIcon();
    userCard.append(icon, userImg, userDiv);

    icon.onclick = deleteUser;
    return userCard;
}

function deleteUser(e) {
    e.target.closest('.userCard').remove();
}


function createTrashIcon() {
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    icon.classList.add('fa-trash');
    icon.classList.add('trash');
    return icon;
}

function createUserInfo({ firstName, lastName, age }) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('userInfo');

    const fullName = document.createElement('p');
    fullName.classList.add('userName');
    fullName.textContent = `${firstName} ${lastName}`;
    userDiv.append(fullName)

    const userAge = document.createElement('span');
    userAge.classList.add('userAge');
    userAge.textContent = age;
    userDiv.append(userAge);
    return userDiv;
}

function createImg({ photoSrc, firstName, lastName }) {
    const userImg = document.createElement('img');
    userImg.src = photoSrc;
    userImg.alt = `${firstName}, ${lastName}`;
    userImg.classList.add('userImg');
    return userImg;
}