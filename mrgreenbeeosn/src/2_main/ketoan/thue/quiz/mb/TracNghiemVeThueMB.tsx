// AccountingQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import VnPracticeQuiz from '../../../../../components/quiz/VnPracticeQuiz';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

export default function TracNghiemVeThueMB(): React.JSX.Element {
	// Danh sách câu hỏi về Thuế Môn bài cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Thuế môn bài (Lệ phí môn bài) là khoản thu nộp được xác định theo chu kỳ nào?",
			options: [
				"Hàng năm",
				"Một lần duy nhất",
				"Theo quý",
				"Theo tháng"
			],
			correctAnswer: 0,
			explanation: "Thuế môn bài (Lệ phí môn bài) là khoản thu nộp hàng năm, được tính toán dựa trên mức vốn điều lệ của tổ chức hoặc doanh thu năm trước của hộ kinh doanh, cá nhân kinh doanh."
		},
		{
			id: 2,
			question: "Đối tượng nào sau đây ĐƯỢC MIỄN nộp Lệ phí môn bài?",
			options: [
				"Tổ chức, doanh nghiệp có vốn điều lệ trên 10 tỷ đồng.",
				"Hộ kinh doanh có địa điểm cố định.",
				"Cá nhân, hộ gia đình hoạt động sản xuất, kinh doanh có doanh thu hàng năm từ 100 triệu đồng trở xuống.",
				"Chi nhánh của công ty mẹ có hoạt động kinh doanh."
			],
			correctAnswer: 2,
			explanation: "Cá nhân, hộ kinh doanh có doanh thu hàng năm từ 100 triệu đồng trở xuống thuộc trường hợp được miễn nộp Lệ phí môn bài theo quy định hiện hành."
		},
		{
			id: 3,
			question: "Mức nộp Lệ phí môn bài đối với doanh nghiệp có Vốn điều lệ 8 tỷ đồng là bao nhiêu?",
			options: [
				"3.000.000 đồng/năm.",
				"2.000.000 đồng/năm.",
				"1.000.000 đồng/năm.",
				"5.000.000 đồng/năm."
			],
			correctAnswer: 1,
			explanation: "Doanh nghiệp có vốn điều lệ từ 10 tỷ đồng trở xuống (bao gồm 8 tỷ đồng) thuộc bậc 2, có mức nộp là 2.000.000 đồng/năm."
		},
		{
			id: 4,
			question: "Thời hạn nộp Lệ phí môn bài chậm nhất là ngày nào hàng năm đối với các doanh nghiệp đang hoạt động?",
			options: [
				"Ngày 30 tháng 3.",
				"Ngày 30 tháng 1.",
				"Ngày 20 tháng 2.",
				"Ngày 31 tháng 12."
			],
			correctAnswer: 1,
			explanation: "Doanh nghiệp đang hoạt động phải nộp Lệ phí môn bài chậm nhất là ngày 30 tháng 1 hàng năm."
		},
		{
			id: 5,
			question: "Nếu một doanh nghiệp mới thành lập (chưa hoạt động kinh doanh) vào tháng 10 năm N, doanh nghiệp đó có được hưởng ưu đãi miễn Lệ phí môn bài năm đầu tiên không?",
			options: [
				"Không, phải nộp ngay trong tháng đầu tiên.",
				"Có, được miễn toàn bộ Lệ phí môn bài trong năm N.",
				"Có, được miễn toàn bộ Lệ phí môn bài trong năm N và năm N+1.",
				"Chỉ được miễn 50% mức nộp."
			],
			correctAnswer: 1,
			explanation: "Tổ chức, doanh nghiệp mới thành lập được miễn Lệ phí môn bài trong năm đầu tiên kể từ ngày được cấp giấy chứng nhận đăng ký kinh doanh."
		},
		{
			id: 6,
			question: "Trường hợp Hộ kinh doanh có doanh thu năm trước liền kề 350 triệu đồng, thì mức nộp Lệ phí môn bài hàng năm là bao nhiêu?",
			options: [
				"1.000.000 đồng/năm.",
				"500.000 đồng/năm.",
				"300.000 đồng/năm.",
				"Được miễn nộp."
			],
			correctAnswer: 1,
			explanation: "Hộ kinh doanh có doanh thu trên 300 triệu đồng đến 500 triệu đồng/năm có mức nộp Lệ phí môn bài là 500.000 đồng/năm."
		},
		{
			id: 7,
			question: "Một doanh nghiệp có Vốn điều lệ 15 tỷ đồng. Mức Lệ phí môn bài hàng năm phải nộp là bao nhiêu?",
			options: [
				"2.000.000 đồng/năm.",
				"3.000.000 đồng/năm.",
				"1.000.000 đồng/năm.",
				"500.000 đồng/năm."
			],
			correctAnswer: 1,
			explanation: "Doanh nghiệp có vốn điều lệ trên 10 tỷ đồng thuộc bậc 1, có mức nộp là 3.000.000 đồng/năm."
		},
		{
			id: 8,
			question: "Khi doanh nghiệp đang hoạt động, nếu nộp hồ sơ khai Lệ phí môn bài (cho năm tiếp theo) sau ngày 30 tháng 1 thì sẽ bị xử phạt hành chính về hành vi gì?",
			options: [
				"Chậm nộp Lệ phí môn bài.",
				"Không nộp Lệ phí môn bài.",
				"Chậm nộp hồ sơ khai Lệ phí môn bài.",
				"Khai sai mức Lệ phí môn bài."
			],
			correctAnswer: 2,
			explanation: "Nộp hồ sơ (tờ khai) sau thời hạn quy định (30 tháng 1) sẽ bị xử phạt hành chính về hành vi chậm nộp hồ sơ khai thuế. (Nếu nộp cả tiền sau ngày 30/1 thì còn bị phạt thêm hành vi chậm nộp tiền)."
		},
		{
			id: 9,
			question: "Trường hợp một Văn phòng đại diện được thành lập chỉ để thực hiện chức năng giao dịch, nghiên cứu thị trường, không trực tiếp hoạt động kinh doanh thì có phải nộp Lệ phí môn bài không?",
			options: [
				"Có, phải nộp mức 1.000.000 đồng/năm.",
				"Có, phải nộp mức bằng 1/2 mức của doanh nghiệp.",
				"Không, được miễn nộp.",
				"Có, phải nộp mức 500.000 đồng/năm."
			],
			correctAnswer: 2,
			explanation: "Chi nhánh, văn phòng đại diện, địa điểm kinh doanh nếu không hoạt động sản xuất, kinh doanh hàng hóa, dịch vụ (chỉ thực hiện chức năng nội bộ, hành chính) thì được miễn nộp Lệ phí môn bài."
		},
		{
			id: 10,
			question: "Nếu một Hộ kinh doanh mới ra hoạt động vào tháng 7 năm N, thì mức Lệ phí môn bài phải nộp trong năm N sẽ được tính như thế nào?",
			options: [
				"Phải nộp 100% mức cả năm.",
				"Phải nộp 50% mức cả năm.",
				"Được miễn nộp 100%.",
				"Nộp theo quý."
			],
			correctAnswer: 1,
			explanation: "Hộ kinh doanh, cá nhân kinh doanh ra hoạt động sản xuất, kinh doanh trong vòng 6 tháng cuối năm (tức là từ ngày 01/7 đến 31/12 của năm đó) thì nộp 50% mức Lệ phí môn bài cả năm."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#mon-bai-basic-practice"><mark className="highlight-tertiary-padding-4-8">Thuế Môn bài</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Về Thuế Môn Bài</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Thuế Môn bài</p>
				</header>
	
				{/* This is the content of Thuế Môn bài Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 11, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};