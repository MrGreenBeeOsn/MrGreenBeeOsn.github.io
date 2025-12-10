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

export default function TracNghiemVeThueCIT(): React.JSX.Element {
	// Danh sách câu hỏi về CIT cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Kỳ tính thuế Thu nhập Doanh nghiệp (CIT) được xác định là:",
			options: [
				"Theo năm dương lịch.",
				"Theo năm tài chính.",
				"Theo từng lần phát sinh (đối với hoạt động kinh doanh vãng lai).",
				"Cả a, b, và c đều đúng."
			],
			correctAnswer: 3,
			explanation: "Kỳ tính thuế CIT được xác định theo năm dương lịch hoặc theo năm tài chính (12 tháng liên tục được đăng ký). Đối với hoạt động kinh doanh vãng lai, thì tính theo từng lần phát sinh hoặc theo thời gian thực hiện hợp đồng."
		},
		{
			id: 2,
			question: "Thu nhập chịu thuế CIT được xác định bằng công thức nào?",
			options: [
				"Thu nhập chịu thuế = Doanh thu - Chi phí được trừ.",
				"Thu nhập chịu thuế = Doanh thu - Chi phí được trừ + Các khoản thu nhập khác.",
				"Thu nhập chịu thuế = Thu nhập tính thuế - Lỗ kết chuyển.",
				"Thu nhập chịu thuế = Lợi nhuận kế toán trước thuế."
			],
			correctAnswer: 1,
			explanation: "Thu nhập chịu thuế (trước khi trừ Lỗ kết chuyển) được xác định bằng Doanh thu trừ đi các khoản Chi phí được trừ, cộng với các khoản Thu nhập khác phát sinh trong kỳ tính thuế."
		},
		{
			id: 3,
			question: "Tỷ lệ thuế suất CIT phổ thông hiện nay tại Việt Nam là bao nhiêu?",
			options: [
				"25%",
				"22%",
				"20%",
				"15%"
			],
			correctAnswer: 2,
			explanation: "Kể từ ngày 01/01/2016, thuế suất thuế CIT phổ thông áp dụng cho hầu hết các doanh nghiệp là 20%."
		},
		{
			id: 4,
			question: "Khoản chi phí nào sau đây không được tính là chi phí được trừ khi xác định thu nhập chịu thuế CIT?",
			options: [
				"Chi phí tiền lương, tiền công thực tế trả cho người lao động.",
				"Chi phí quảng cáo, tiếp thị hợp lý có hóa đơn.",
				"Chi khấu hao tài sản cố định không sử dụng cho hoạt động sản xuất, kinh doanh.",
				"Chi mua nguyên vật liệu, hàng hóa có hóa đơn, chứng từ hợp pháp."
			],
			correctAnswer: 2,
			explanation: "Chi phí khấu hao tài sản cố định không phục vụ cho hoạt động sản xuất, kinh doanh của doanh nghiệp là chi phí không được trừ."
		},
		{
			id: 5,
			question: "Thời gian được phép chuyển lỗ từ hoạt động sản xuất kinh doanh sang năm sau để giảm thu nhập chịu thuế tối đa là bao nhiêu năm?",
			options: [
				"Không giới hạn.",
				"Tối đa 3 năm liên tục, kể từ năm phát sinh lỗ.",
				"Tối đa 5 năm liên tục, kể từ năm tiếp sau năm phát sinh lỗ.",
				"Tối đa 7 năm liên tục, kể từ năm tiếp sau năm phát sinh lỗ."
			],
			correctAnswer: 2,
			explanation: "Doanh nghiệp được chuyển lỗ liên tục sang thu nhập chịu thuế của những năm tiếp theo, nhưng tối đa không quá 5 năm, kể từ năm tiếp sau năm phát sinh lỗ."
		},
		{
			id: 6,
			question: "Doanh thu để tính thu nhập chịu thuế đối với hoạt động bán hàng hóa là:",
			options: [
				"Toàn bộ tiền bán hàng ghi trên hóa đơn, bao gồm cả thuế GTGT (nếu có).",
				"Toàn bộ tiền bán hàng ghi trên hóa đơn, chưa bao gồm thuế GTGT.",
				"Giá bán hàng hóa chưa có thuế GTGT, sau khi đã trừ chiết khấu thương mại và giảm giá hàng bán.",
				"Toàn bộ tiền bán hàng thực thu được trong kỳ."
			],
			correctAnswer: 2,
			explanation: "Doanh thu tính thuế CIT không bao gồm thuế GTGT (đối với doanh nghiệp nộp thuế GTGT theo phương pháp khấu trừ) và phải trừ đi các khoản giảm trừ doanh thu (như chiết khấu thương mại, giảm giá hàng bán)."
		},
		{
			id: 7,
			question: "Doanh nghiệp nào sau đây có thể được áp dụng thuế suất CIT ưu đãi 10%?",
			options: [
				"Doanh nghiệp hoạt động trong lĩnh vực tài chính, ngân hàng.",
				"Doanh nghiệp hoạt động trong lĩnh vực kinh doanh bất động sản.",
				"Doanh nghiệp thực hiện dự án đầu tư mới sản xuất sản phẩm phần mềm.",
				"Doanh nghiệp có quy mô nhỏ và siêu nhỏ."
			],
			correctAnswer: 2,
			explanation: "Các dự án đầu tư mới trong lĩnh vực công nghệ cao, sản xuất sản phẩm phần mềm, giáo dục, y tế, môi trường... thường thuộc đối tượng được hưởng ưu đãi thuế suất 10%."
		},
		{
			id: 8,
			question: "Thời điểm nộp hồ sơ quyết toán thuế CIT năm là khi nào?",
			options: [
				"Chậm nhất là ngày thứ 30 của tháng đầu tiên của năm dương lịch tiếp theo.",
				"Chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm dương lịch hoặc năm tài chính.",
				"Chậm nhất là ngày 31 tháng 3 của năm dương lịch tiếp theo.",
				"Chậm nhất là ngày thứ 60 kể từ ngày kết thúc năm dương lịch hoặc năm tài chính."
			],
			correctAnswer: 1,
			explanation: "Thời hạn nộp hồ sơ quyết toán thuế CIT năm là chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm dương lịch hoặc năm tài chính."
		},
		{
			id: 9,
			question: "Khoản chi nào sau đây là chi phí không được trừ khi xác định thu nhập chịu thuế CIT?",
			options: [
				"Chi tiền lương, tiền công của chủ doanh nghiệp tư nhân.",
				"Chi phí trích lập dự phòng giảm giá hàng tồn kho.",
				"Chi đóng bảo hiểm xã hội, bảo hiểm y tế bắt buộc cho người lao động.",
				"Chi phí lãi vay vượt quá 150% lãi suất cơ bản do Ngân hàng Nhà nước công bố."
			],
			correctAnswer: 0,
			explanation: "Tiền lương của chủ doanh nghiệp tư nhân hoặc chủ công ty TNHH một thành viên do cá nhân làm chủ không được tính vào chi phí được trừ vì chủ sở hữu là người chịu trách nhiệm về lợi nhuận và lỗ của doanh nghiệp. (Lưu ý: Đáp án d là quy định cũ về chi phí lãi vay; theo quy định mới, chi phí lãi vay được khống chế theo tỷ lệ EBITDA)."
		},
		{
			id: 10,
			question: "Thuế suất ưu đãi 15% được áp dụng cho hoạt động nào sau đây?",
			options: [
				"Hoạt động kinh doanh thông thường của doanh nghiệp nhỏ và siêu nhỏ.",
				"Hoạt động giáo dục, đào tạo.",
				"Doanh nghiệp có thu nhập từ trồng, bảo vệ rừng.",
				"Doanh nghiệp có thu nhập từ dịch vụ tư vấn quản lý."
			],
			correctAnswer: 2,
			explanation: "Thu nhập của doanh nghiệp từ trồng, chăm sóc, bảo vệ rừng; nuôi trồng, chế biến nông, lâm, thủy sản ở địa bàn kinh tế - xã hội khó khăn, v.v., thuộc đối tượng được áp dụng thuế suất ưu đãi 15%."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/thue#cit-basic-practice"><mark className="highlight-tertiary-padding-4-8">Thuế CIT</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm về Thuế Thu nhập Doanh nghiệp</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental thuế CIT concepts</p>
				</header>
	
				{/* This is the content of Thuế CIT Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 09, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};